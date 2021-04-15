import { Component, OnInit } from '@angular/core';
import { PI_HOLE_ADMIN_PANEL_URL } from 'src/app/constants';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  public openPiHoleAdminPanel(): void {
    window.open(PI_HOLE_ADMIN_PANEL_URL, '_blank')
  }

}
