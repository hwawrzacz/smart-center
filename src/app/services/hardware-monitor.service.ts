import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum WebSocketStatus {
  CONNECTING,
  OPEN,
  RECONNECTING,
  CLOSING,
  CLOSED,
}

enum MessageType {
  CONNECTED = 'connected',
  TEMP_REQUEST = 'temp_request',
  TEMP_RESPONSE = 'temp_response',
  UNKNOWN = 'unknown'
}

interface Message {
  type: MessageType;
  success?: boolean;
  response?: string;
  error?: string;
}

/** Service which is responsible for obtaining real-time data about Raspberry */
@Injectable({
  providedIn: 'root'
})
export class HardwareMonitorService {
  websocketStatus$ = new BehaviorSubject(WebSocketStatus.CONNECTING);
  temperature$ = new BehaviorSubject(0);
  private _client: WebSocket;

  constructor() {
    this._client = new WebSocket('ws://192.168.0.2:3000');

    this._client.addEventListener('open', this.handleWebSocketOpen);
    this._client.addEventListener('message', this.handleWebSocketMessage);
    this._client.addEventListener('close', this.handleWebSocketClose);
  }

  private handleWebSocketOpen = (event: Event): void => {
    this.websocketStatus$.next(WebSocketStatus.OPEN);
  }

  private handleWebSocketMessage = (messageEvent: MessageEvent<string>): void => {
    const message = JSON.parse(messageEvent.data) as Message;

    if (message.type === MessageType.TEMP_RESPONSE) {
      const temperature = parseInt(message.response?.trim() || '0');
      this.temperature$.next(temperature);
    }
  }

  private handleWebSocketClose(closeEvent: CloseEvent): void {
    // TODO: Start reconnecting
    this.websocketStatus$.next(WebSocketStatus.CLOSED);
  }
}
