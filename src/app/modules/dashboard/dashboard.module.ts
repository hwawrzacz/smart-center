import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { WeatherModule } from '../weather/weather.module'
import { AirQualityModule } from '../air-quality/air-quality.module'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WeatherModule,
    AirQualityModule,
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
