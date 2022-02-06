import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IndoorConditionsComponent } from './components/indoor-conditions-card/indoor-conditions.component'
import { CommonMaterialModule } from '../common-material/common-material.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    IndoorConditionsComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedModule,
  ],
  exports: [IndoorConditionsComponent],
})
export class IndoorConditionsModule {}
