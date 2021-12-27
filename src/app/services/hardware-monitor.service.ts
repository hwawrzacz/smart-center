import { Injectable } from '@angular/core'
import { HardwareStatus } from '../models/hardware-status'
import { Message } from '../models/message'
import { MessageType } from '../models/message-type'
import { WebsocketService } from './websocket.service'

/** Service which is responsible for obtaining real-time data about Raspberry */
@Injectable({
  providedIn: 'root'
})
export class HardwareMonitorService extends WebsocketService<HardwareStatus> {
  constructor() {
    super('ws://192.168.0.2:3000')
  }

  protected handleWebSocketMessage(messageEvent: MessageEvent<string>): void {
    const message = JSON.parse(messageEvent.data) as Message<any>

    if (message.type === MessageType.HARDWARE_STATUS_RESPONSE) {
      const hardwareStatus = message.value as HardwareStatus
      this._data$.next(hardwareStatus)
    }
  }
}
