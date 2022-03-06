import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'
import { CommonMaterialModule } from '../common-material/common-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component'

@NgModule({
  declarations: [
    DashboardCardComponent,
    ConfirmationDialogComponent,
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
