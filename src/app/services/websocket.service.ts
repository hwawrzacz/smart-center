import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HardwareStatus } from '../models/hardware-status';
import { Message } from '../models/message';
import { MessageType } from '../models/message-type';
import { WebSocketStatus } from '../models/websocket-status';

export abstract class WebsocketService<T> {
  protected readonly _websocketStatus$: BehaviorSubject<WebSocketStatus | any>;
  protected readonly _data$: BehaviorSubject<T>;
  private _websocket: WebSocket;

  //#region Getters and setters
  get data$(): Subject<WebSocketStatus> {
    return this._websocketStatus$ as Subject<WebSocketStatus>;
  }

  get data(): T {
    return this._data$.value;
  }
  //#endregion

  constructor(websocketUrl: string) {
    this._websocketStatus$ = new BehaviorSubject(WebSocketStatus.CONNECTING);
    const initialData = {} as T;
    this._data$ = new BehaviorSubject(initialData);
    this._websocket = new WebSocket(websocketUrl);

    this._websocket.addEventListener('open', (event) => this.handleWebSocketOpen(event));
    this._websocket.addEventListener('message', (event) => this.handleWebSocketMessage(event));
    this._websocket.addEventListener('close', (event) => this.handleWebSocketClose(event));
  }

  protected handleWebSocketOpen(event: Event): void {
    this._websocketStatus$.next(WebSocketStatus.OPEN);
  }

  protected abstract handleWebSocketMessage(messageEvent: MessageEvent<string>): void;

  protected handleWebSocketClose(closeEvent: CloseEvent): void {
    // TODO: Start reconnecting
    this._websocketStatus$.next(WebSocketStatus.CLOSED);
  }
}
