export enum MessageType {
  // Common messages
  CONNECTED = 'connected',
  UNKNOWN = 'unknown',

  // Hardware status messages
  HARDWARE_STATUS_REQUEST = 'hardware_status_request',
  HARDWARE_STATUS_RESPONSE = 'hardware_status_response',

  // Weather messages
  WEATHER_REQUEST = 'weather_request',
  WEATHER_RESPONSE = 'weather_response',
}
