import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HardwareStatusWidgetComponent } from './components/hardware-status-widget/hardware-status-widget.component'
import { CommonMaterialModule } from '../common-material/common-material.module'


@NgModule({
  declarations: [HardwareStatusWidgetComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
  ],
  exports: [HardwareStatusWidgetComponent]
})
export class HardwareMonitorModule {}
