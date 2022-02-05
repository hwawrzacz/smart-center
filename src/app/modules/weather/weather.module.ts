import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherCardComponent } from './components/weather-card/weather-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedModule,
  ],
  exports: [WeatherCardComponent],
})
export class WeatherModule {}
