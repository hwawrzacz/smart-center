export interface WeatherRaw {
  dt: Date
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
  sunrise?: Date
  sunset?: Date
}

export interface WeatherDescriptionRaw {
  id: number
  main: string
  description: string
  icon: string
}
