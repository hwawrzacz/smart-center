import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HardwareStatus } from '../../../models/hardware-status'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HardwareMonitorService {
  private readonly URL = `${ environment.serverIpAddress }/hardware-status`

  constructor(private http: HttpClient) { }

  public getHardwareStatus(): Observable<HardwareStatus> {
    return this.http.get<HardwareStatus>(this.URL)
  }
}
