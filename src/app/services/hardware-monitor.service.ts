import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HardwareStatus } from '../models/hardware-status';
import { Message } from '../models/message';
import { MessageType } from '../models/message-type';
import { WebSocketStatus } from '../models/websocket-status';

/** Service which is responsible for obtaining real-time data about Raspberry */
@Injectable({
  providedIn: 'root'
})
export class HardwareMonitorService {
  private readonly _websocketStatus$: BehaviorSubject<WebSocketStatus | any>;
  private readonly _hardwareStatus$: BehaviorSubject<HardwareStatus>;
  private _websocket: WebSocket;

  //#region Getters and setters
  get websocketStaus$(): Subject<WebSocketStatus> {
    return this._websocketStatus$ as Subject<WebSocketStatus>;
  }

  get hardwareStatus(): HardwareStatus {
    return this._hardwareStatus$.value;
  }
  //#endregion

  constructor() {
    this._websocketStatus$ = new BehaviorSubject(WebSocketStatus.CONNECTING);
    const hardwareStatus = {
      cpuTemp: 0,
      ramTotal: 0,
      ramUsed: 0,
    } as HardwareStatus;

    this._hardwareStatus$ = new BehaviorSubject(hardwareStatus);
    this._websocket = new WebSocket('ws://192.168.0.2:3000');

    this._websocket.addEventListener('open', (event) => this.handleWebSocketOpen(event));
    this._websocket.addEventListener('message', (event) => this.handleWebSocketMessage(event));
    this._websocket.addEventListener('close', (event) => this.handleWebSocketClose(event));
  }

  private handleWebSocketOpen(event: Event): void {
    this._websocketStatus$.next(WebSocketStatus.OPEN);
  }

  private handleWebSocketMessage(messageEvent: MessageEvent<string>): void {
    const message = JSON.parse(messageEvent.data) as Message<any>;

    if (message.type === MessageType.HARDWARE_STATUS_RESPONSE) {
      const hardwareStatus = message.value as HardwareStatus;
      this._hardwareStatus$.next(hardwareStatus);
    }
  }

  private handleWebSocketClose(closeEvent: CloseEvent): void {
    // TODO: Start reconnecting
    this._websocketStatus$.next(WebSocketStatus.CLOSED);
  }
}
