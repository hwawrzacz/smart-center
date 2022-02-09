import { WeatherDescriptionRaw, WeatherRaw } from '../models/weather-raw'
import { Weather, WeatherDescription } from '../models/weather'
import { WeatherResponseRaw } from '../models/weather-response-raw'
import { WeatherResponse } from '../models/weather-response'

export class WeatherResponseMapper {
  public static mapWeatherResponse(data: WeatherResponseRaw): WeatherResponse {
    return {
      current: WeatherResponseMapper.mapWeather(data.current, data.lat, data.lon),
      forecast: this.mapForecast(data.hourly, data.lat, data.lon)
    } as WeatherResponse
  }

  private static mapForecast(data: WeatherRaw[], lat: number, lon: number): Weather[] {
    return data.map(el => WeatherResponseMapper.mapWeather(el, lat, lon))
  }

  private static mapWeather(data: WeatherRaw, lat: number, lon: number): Weather {
    return {
      date: new Date(data.dt * 1000),
      latitude: lat,
      longitude: lon,
      temperature: Math.round(data.temp),
      feelsLike: Math.round(data.feels_like),
      pressure: data.pressure,
      humidity: data.humidity,
      dewPoint: data.dew_point,
      uvIndex: data.uvi,
      clouds: data.clouds,
      visibility: data.visibility,
      windSpeed: data.wind_speed,
      windDeg: data.wind_deg,
      windGust: data.wind_gust,
      weather: WeatherResponseMapper.mapWeatherDescription(data.weather),

      precipitationChance: data.pop,
      sunrise: data.sunrise ? new Date(data.sunrise * 1000) : undefined,
      sunset: data.sunset ? new Date(data.sunset * 1000) : undefined,
    }
  }

  private static mapWeatherDescription(data: WeatherDescriptionRaw[]): WeatherDescription {
    return {
      id: data[0].id,
      main: data[0].main,
      description: data[0].description,
      icon: data[0].icon,
    } as WeatherDescription
  }
}
