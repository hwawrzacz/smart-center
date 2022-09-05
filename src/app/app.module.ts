import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonMaterialModule } from './modules/common-material/common-material.module'
import { SidenavMenuComponent } from './pages/dashboard/sidenav-menu/sidenav-menu.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { CoreModule } from './modules/core/core.module'
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component'
import { ServiceTranslatePipe } from './pipes/service-translate.pipe'
import { HardwareMonitorModule } from './pages/dashboard/hardware-monitor/hardware-monitor.module'
import { HardwareManagementModule } from './pages/dashboard/hardware-management/hardware-management.module';
import { SupportedServicesComponent } from './pages/settings/supported-services/supported-services.component'

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    SettingsPageComponent,
    ServiceTranslatePipe,
    SupportedServicesComponent,
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
    HardwareMonitorModule,
    HardwareManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
