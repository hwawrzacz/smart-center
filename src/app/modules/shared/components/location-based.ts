import { Coordinates } from '../../../models/coordinates'
import { ObjectHelper } from '../../core/utils/object-helper'
import { PermissionsService } from '../../core/permissions/permissions.service'
import { tap } from 'rxjs/operators'

export abstract class LocationBased {
  protected latitude?: number
  protected longitude?: number

  protected constructor(protected permissions: PermissionsService) { }

  protected abstract onLocationUpdated(): void

  protected addUserLocationListener() {
    this.permissions.location
      .pipe(
        tap((coords: Coordinates) => {
          this.updateCoords(coords)
          this.onLocationUpdated()
        })
      ).subscribe()
  }

  protected updateCoords(coords: Coordinates) {
    if (ObjectHelper.isEmpty(coords)) {
      return
    }
    this.latitude = coords.latitude
    this.longitude = coords.longitude
  }

  protected attemptLocationAccess() {
    this.permissions.requestLocationPermission()
  }
}
