import { Inject, Injectable } from '@angular/core'
import { Permission } from './models/permission.enum'
import { from } from 'rxjs'
import { DOCUMENT } from '@angular/common'
import { filter, take, tap } from 'rxjs/operators'
import { PermissionRequestState } from './models/permission-request-state.enum'
import { Coordinates } from '../../../models/coordinates'

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private location?: Coordinates
  private readonly navigator?: Navigator

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.navigator = document.defaultView?.navigator
  }

  private updateLocation = (position: GeolocationPosition) => {
    if (!this.location) {
      this.location = {} as Coordinates
    }
    this.location.latitude = position.coords.latitude
    this.location.longitude = position.coords.longitude
    console.log(this.location)
  }

  requestLocationPermission() {
    if (!this.navigator) {
      throw new Error('Could not access Navigator')
    }

    from(this.navigator.permissions.query({name: Permission.GEOLOCATION}))
      .pipe(
        filter(result => result.state !== PermissionRequestState.DENIED),
        take(1),
        tap(() => {
          this.navigator?.geolocation?.getCurrentPosition(data => this.updateLocation(data))
        })
      )
      .subscribe()
  }
}
