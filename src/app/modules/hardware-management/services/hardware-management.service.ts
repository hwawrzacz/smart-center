import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HardwareStatus } from '../../../models/hardware-status'

@Injectable({
  providedIn: 'root'
})
export class HardwareManagementService {
  private readonly REBOOT_URL = `${ environment.serverIpAddress }/reboot`
  private readonly SHUTDOWN_URL = `${ environment.serverIpAddress }/shutdown`

  constructor(private http: HttpClient) { }

  public reboot(): Observable<HardwareStatus> {
    return this.http.get<HardwareStatus>(this.REBOOT_URL)
  }

  public shutdown(): Observable<HardwareStatus> {
    return this.http.get<HardwareStatus>(this.SHUTDOWN_URL)
  }
}
