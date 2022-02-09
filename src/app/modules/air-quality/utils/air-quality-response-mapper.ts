import { AirQualityResponse, ComponentsRaw } from '../models/air-quality-response'
import { AirComponents, AirQualityData } from '../models/air-quality-data'

export class AirQualityResponseMapper {
  public static mapAirQualityResponse(data: AirQualityResponse): AirQualityData[] {
    const mappedData: AirQualityData[] = []

    data.list.forEach(airQuality => {
      const newRead = {} as AirQualityData

      newRead.latitude = data.coord[0]
      newRead.longitude = data.coord[1]
      newRead.airQualityIndex = airQuality.main.aqi
      newRead.components = AirQualityResponseMapper.mapComponents(airQuality.components)
      newRead.date = new Date(airQuality.dt * 1000)

      mappedData.push(newRead)
    })

    return mappedData
  }

  public static mapComponents(components: ComponentsRaw): AirComponents {
    return {
      co: components.co,
      no: components.no,
      no2: components.no2,
      o3: components.o3,
      so2: components.so2,
      pm25: components.pm2_5,
      pm10: components.pm10,
      nh3: components.nh3
    } as AirComponents
  }
}
