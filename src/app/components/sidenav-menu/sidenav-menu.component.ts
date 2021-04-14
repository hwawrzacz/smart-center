import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  private readonly PI_HOLE_ADMIN_PANEL_URL = 'http://192.168.0.2/admin';
  constructor() { }

  ngOnInit(): void { }

  public openPiHoleAdminPanel(): void {
    window.open(this.PI_HOLE_ADMIN_PANEL_URL, '_blank')
  }

}
