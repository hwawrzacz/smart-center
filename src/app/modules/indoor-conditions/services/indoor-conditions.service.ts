import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IndoorConditions } from '../models/indoor-conditions'

@Injectable({
  providedIn: 'root'
})
export class IndoorConditionsService {
  // TODO: replace with actual url
  private readonly URL = `http://localhost:3000/indoor-conditions`

  constructor(private http: HttpClient) { }

  public getIndoorConditions(): Observable<IndoorConditions> {
    return this.http.get<IndoorConditions>(this.URL)
  }
}
