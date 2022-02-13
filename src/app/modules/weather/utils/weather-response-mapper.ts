import { WeatherDescriptionRaw, WeatherRaw } from '../models/weather-raw'
import { Weather, WeatherDescription } from '../models/weather'
import { WeatherResponseRaw } from '../models/weather-response-raw'
import { WeatherResponse } from '../models/weather-response'
import { ObjectHelper } from '../../core/utils/object-helper'

export class WeatherResponseMapper {
  public static mapWeatherResponse(data: WeatherResponseRaw): WeatherResponse {
    const weatherResponse: WeatherResponse = {
      current: WeatherResponseMapper.mapWeather(data.current, data.lat, data.lon),
      forecast: this.mapForecast(data.hourly, data.lat, data.lon)
    }
    weatherResponse.current.precipitationChance = weatherResponse.forecast[0].precipitationChance
    const [minTemp, maxTemp] = WeatherResponseMapper.getMinMaxTemperature(weatherResponse.forecast)
    weatherResponse.current.temperatureMin = minTemp
    weatherResponse.current.temperatureMax = maxTemp

    const [minFeels, maxFeels] = WeatherResponseMapper.getMinMaxFeelsLike(weatherResponse.forecast)
    weatherResponse.current.feelsLikeMin = minFeels
    weatherResponse.current.feelsLikeMax = maxFeels

    return weatherResponse
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

  private static getMinMaxTemperature(forecast: Weather[]): number[] {
    const forecastCopy = forecast.map(weather => ObjectHelper.copy<Weather>(weather))
    forecastCopy.sort()
    return [forecastCopy[0].temperature, forecastCopy[forecastCopy.length - 1].temperature]
  }

  private static getMinMaxFeelsLike(forecast: Weather[]): number[] {
    const forecastCopy = forecast.map(weather => ObjectHelper.copy<Weather>(weather))
    forecastCopy.sort()
    return [forecastCopy[0].feelsLike, forecastCopy[forecastCopy.length - 1].feelsLike]
  }
}
