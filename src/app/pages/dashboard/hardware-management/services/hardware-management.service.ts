import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { HardwareStatus } from '../../hardware-monitor/models/hardware-status'

@Injectable({
  providedIn: 'root'
})
export class HardwareManagementService {
  private readonly REBOOT_URL = `${ environment.serverIpAddress }/manage/reboot`
  private readonly SHUTDOWN_URL = `${ environment.serverIpAddress }/manage/shutdown`

  constructor(private http: HttpClient) { }

  public reboot(): void {
    this.http.get<HardwareStatus>(this.REBOOT_URL).subscribe()
  }

  public shutdown(): void {
    this.http.get<HardwareStatus>(this.SHUTDOWN_URL).subscribe()
  }
}
