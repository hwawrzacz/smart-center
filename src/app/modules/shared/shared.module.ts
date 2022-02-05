import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module'

@NgModule({
  declarations: [
    DashboardCardComponent,
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
  ],
  exports: [
    DashboardCardComponent,
  ]
})
export class SharedModule {}
