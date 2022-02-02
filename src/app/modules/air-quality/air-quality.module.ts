import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AirQualityCardComponent } from './components/air-quality-card/air-quality-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module'


@NgModule({
  declarations: [
    AirQualityCardComponent
  ],
  exports: [
    AirQualityCardComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule
  ]
})
export class AirQualityModule {}
