import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherCardComponent } from './components/weather-card/weather-card.component'
import { SharedModule } from '../../../shared/shared.module'
import { CommonMaterialModule } from '../../../modules/common-material/common-material.module'
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component'


@NgModule({
  declarations: [
    WeatherCardComponent,
    ForecastItemComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedModule,
  ],
  exports: [
    WeatherCardComponent
  ]
})
export class WeatherModule {}
