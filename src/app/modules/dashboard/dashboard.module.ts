import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { AirQualityModule } from '../air-quality/air-quality.module'
import { CommonMaterialModule } from '../common-material/common-material.module'
import { SharedModule } from '../shared/shared.module'
import { WeatherModule } from '../weather/weather.module'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedModule,
    DashboardRoutingModule,
    AirQualityModule,
    WeatherModule,
  ],
  exports: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
