import { Component, OnInit } from '@angular/core'
import { AirQualityService } from '../../services/air-quality.service'
import { catchError, tap } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'app-air-quality-card',
  templateUrl: './air-quality-card.component.html',
  styleUrls: ['./air-quality-card.component.scss']
})
export class AirQualityCardComponent implements OnInit {

  constructor(private airQualityService: AirQualityService) { }

  ngOnInit(): void {
    this.airQualityService.getAirQuality().pipe(
      tap(console.log),
      catchError(err => {
        console.error(err)
        return of(null)
      })
    ).subscribe()
  }

}
