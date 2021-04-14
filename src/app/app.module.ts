import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './modules/common-material/common-material.module';
import { HardwareStatusWidgetComponent } from './components/hardware-status-widget/hardware-status-widget.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareStatusWidgetComponent,
    SidenavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
