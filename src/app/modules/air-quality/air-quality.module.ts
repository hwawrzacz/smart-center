import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AirQualityCardComponent } from './components/air-quality-card/air-quality-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module'
import { SharedComponentsModule } from '../shared-components/shared-components.module'


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
    SharedComponentsModule,
  ]
})
export class AirQualityModule {}
