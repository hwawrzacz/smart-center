import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AirQualityCardComponent } from './components/air-quality-card/air-quality-card.component'
import { CommonMaterialModule } from '../../../modules/common-material/common-material.module'
import { SharedModule } from '../../../shared/shared.module'


@NgModule({
  declarations: [
    AirQualityCardComponent
  ],
  exports: [
    AirQualityCardComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedModule,
  ]
})
export class AirQualityModule {}
