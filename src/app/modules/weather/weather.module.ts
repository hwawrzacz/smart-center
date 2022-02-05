import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherCardComponent } from './components/weather-card/weather-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module'
import { SharedComponentsModule } from '../shared-components/shared-components.module'

@NgModule({
  declarations: [
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedComponentsModule,
  ],
  exports: [WeatherCardComponent],
})
export class WeatherModule {}
