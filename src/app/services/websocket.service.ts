import { BehaviorSubject, Subject } from 'rxjs'
import { WebSocketStatus } from '../models/websocket-status'

export abstract class WebsocketService<T> {
  protected readonly _websocketStatus$: BehaviorSubject<WebSocketStatus | any>
  protected readonly data$: BehaviorSubject<T>
  private websocket: WebSocket

  //#region Getters and setters
  get websocketStatus$(): Subject<WebSocketStatus> {
    return this._websocketStatus$ as Subject<WebSocketStatus>
  }

  get data(): T {
    return this.data$.value
  }

  //#endregion

  constructor(websocketUrl: string) {
    this._websocketStatus$ = new BehaviorSubject(WebSocketStatus.CONNECTING)
    const initialData = {} as T
    this.data$ = new BehaviorSubject(initialData)
    this.websocket = new WebSocket(websocketUrl)

    this.websocket.addEventListener('open', (event) => this.handleWebSocketOpen(event))
    this.websocket.addEventListener('message', (event) => this.handleWebSocketMessage(event))
    this.websocket.addEventListener('close', (event) => this.handleWebSocketClose(event))
  }

  protected handleWebSocketOpen(event: Event): void {
    this._websocketStatus$.next(WebSocketStatus.OPEN)
  }

  protected abstract handleWebSocketMessage(messageEvent: MessageEvent<string>): void;

  protected handleWebSocketClose(closeEvent: CloseEvent): void {
    // TODO: Start reconnecting
    this._websocketStatus$.next(WebSocketStatus.CLOSED)
  }
}
