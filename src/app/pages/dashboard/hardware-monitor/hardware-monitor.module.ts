import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HardwareStatusWidgetComponent } from './components/hardware-status-widget/hardware-status-widget.component'
import { CommonMaterialModule } from '../../../modules/common-material/common-material.module'


@NgModule({
  declarations: [HardwareStatusWidgetComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
  ],
  exports: [HardwareStatusWidgetComponent]
})
export class HardwareMonitorModule {}
