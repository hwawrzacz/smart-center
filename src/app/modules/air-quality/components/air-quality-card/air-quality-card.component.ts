import { Component, OnInit } from '@angular/core'
import { AirQualityService } from '../../services/air-quality.service'
import { catchError, tap } from 'rxjs/operators'
import { of, Subject } from 'rxjs'
import { AirQualityData } from '../../models/air-quality-data'
import { AirQualityIndex, AirQualityIndexNames } from '../../models/air-quality-index'

@Component({
  selector: 'app-air-quality-card',
  templateUrl: './air-quality-card.component.html',
  styleUrls: ['./air-quality-card.component.scss']
})
export class AirQualityCardComponent implements OnInit {
  airQualityData$: Subject<AirQualityData> = new Subject<AirQualityData>()

  constructor(private airQualityService: AirQualityService) { }

  ngOnInit(): void {
    this.updateAirQualityData()
  }

  private updateAirQualityData(): void {
    this.airQualityService.getAirQuality().pipe(
      tap(data => {
        this.airQualityData$.next(data)
      }),
      catchError(err => {
        console.error(err)
        return of(null)
      })
    ).subscribe()
  }

  public getAirQualityIndexName(index: AirQualityIndex): string {
    return AirQualityIndexNames[index]
  }

  public onRefresh(): void {
    this.updateAirQualityData()
  }
}
