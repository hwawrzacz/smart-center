import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { HomeRoutingModule } from './home-routing.module'
import { WeatherModule } from '../weather/weather.module'
import { AirQualityModule } from '../air-quality/air-quality.module'


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WeatherModule,
    AirQualityModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
