import { Inject, Injectable } from '@angular/core'
import { Permission } from './models/permission.enum'
import { BehaviorSubject, from, Observable } from 'rxjs'
import { DOCUMENT } from '@angular/common'
import { filter, take, tap } from 'rxjs/operators'
import { PermissionRequestState } from './models/permission-request-state.enum'
import { Coordinates } from '../../../models/coordinates'

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private _location: BehaviorSubject<Coordinates>
  private readonly navigator?: Navigator

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._location = new BehaviorSubject<Coordinates>({} as Coordinates)
    this.navigator = document.defaultView?.navigator
  }

  get location(): Observable<Coordinates> {
    return this._location.asObservable();
  }

  private updateLocation = (position: GeolocationPosition) => {
    this._location.next({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
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
