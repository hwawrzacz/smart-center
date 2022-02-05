import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sidenavExpanded: boolean

  constructor() {
    this.sidenavExpanded = false
  }

  public toggleSidenav(): void {
    this.sidenavExpanded = !this.sidenavExpanded
  }

  public handleSidenavStateChange(state: boolean): void {
    if (this.sidenavExpanded != state) {
      this.sidenavExpanded = state
    }
  }

}
