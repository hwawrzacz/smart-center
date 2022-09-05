import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IndoorConditions } from '../models/indoor-conditions'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class IndoorConditionsService {
  private readonly URL = `${ environment.serverIpAddress }/indoor-conditions`

  constructor(private http: HttpClient) { }

  public getIndoorConditions(): Observable<IndoorConditions> {
    return this.http.get<IndoorConditions>(this.URL)
  }
}
