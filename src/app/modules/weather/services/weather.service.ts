import { Injectable } from '@angular/core'
import { Message } from 'src/app/models/message'
import { MessageType } from 'src/app/models/message-type'
import { WebsocketService } from 'src/app/services/websocket.service'
import { WeatherData } from '../models/weather-data.interface'

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends WebsocketService<WeatherData> {
  constructor() {
    super('ws://192.168.0.2:3001')
    console.log('service created')
  }

  protected handleWebSocketMessage(messageEvent: MessageEvent): void {
    console.log('handling ws message')

    const message = JSON.parse(messageEvent.data) as Message<any>

    if (message.type === MessageType.WEATHER_RESPONSE) {
      const weatherData = message.value as WeatherData
      console.log(weatherData)

      this._data$.next(weatherData)
    }
  }
}
