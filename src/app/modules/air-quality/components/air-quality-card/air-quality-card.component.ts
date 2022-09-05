import { Component, OnInit } from '@angular/core'
import { AirQualityService } from '../../services/air-quality.service'
import { catchError, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AirQualityData } from '../../models/air-quality-data'
import { AirQualityIndex, AirQualityIndexNames } from '../../models/air-quality-index'
import { PermissionsService } from '../../../core/permissions/permissions.service'
import { LocationBased } from '../../../shared/components/location-based'

@Component({
  selector: 'app-air-quality-card',
  templateUrl: './air-quality-card.component.html',
  styleUrls: ['./air-quality-card.component.scss']
})
export class AirQualityCardComponent extends LocationBased implements OnInit {
  airQualityData?: AirQualityData

  constructor(
    private airQualityService: AirQualityService,
    protected permissions: PermissionsService
  ) {
    super(permissions)
  }

  ngOnInit(): void {
    this.updateAirQualityData()
    this.addUserLocationListener()
  }

  protected onLocationUpdated() {
    this.updateAirQualityData()
  }

  private updateAirQualityData(): void {
    this.airQualityService.getAirQuality().pipe(
      tap(data => this.airQualityData = data),
      catchError(err => {
        console.error(err)
        return of(null)
      })
    ).subscribe()
  }

  getAirQualityIndexName(index: AirQualityIndex): string {
    return AirQualityIndexNames[index]
  }

  onRefresh(): void {
    this.attemptLocationAccess()
    this.updateAirQualityData()
  }
}
