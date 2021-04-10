import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _sidenavExpanded: boolean;

  get sidenavExpanded(): boolean {
    return this._sidenavExpanded;
  }

  constructor() {
    this._sidenavExpanded = false;
  }

  public toggleSidenav(): void {
    this._sidenavExpanded = !this._sidenavExpanded;
  }

  public handleSidenavStateChange(state: boolean): void {
    if (this._sidenavExpanded != state) {
      this._sidenavExpanded = state;
    }
  }

}
