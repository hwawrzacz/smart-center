export interface WeatherRaw {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: WeatherDescriptionRaw[]

  pop?: number
  sunrise?: number
  sunset?: number
}

export interface WeatherDescriptionRaw {
  id: number
  main: string
  description: string
  icon: string
}
