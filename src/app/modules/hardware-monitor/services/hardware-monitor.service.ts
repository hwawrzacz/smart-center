import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HardwareStatus } from '../../../models/hardware-status'

@Injectable({
  providedIn: 'root'
})
export class HardwareMonitorService {
  // TODO: replace with actual ip address
  private readonly URL = `http://localhost:3000/hardware-status`

  constructor(private http: HttpClient) { }

  public getHardwareStatus(): Observable<HardwareStatus> {
    return this.http.get<HardwareStatus>(this.URL)
  }
}
