import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonMaterialModule } from './modules/common-material/common-material.module'
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { CoreModule } from './modules/core/core.module'
import { SettingsPageComponent } from './pages/settings-page/settings-page.component'
import { ServiceTranslatePipe } from './pipes/service-translate.pipe'
import { HardwareMonitorModule } from './modules/hardware-monitor/hardware-monitor.module'

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    SettingsPageComponent,
    ServiceTranslatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    CoreModule,
    HardwareMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
