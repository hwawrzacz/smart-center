import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() title?: string
  @Input() showDetailsButton?: boolean
  @Input() showRefreshButton?: boolean
  @Input() flexDirection: 'row' | 'column' = 'column'
  @Input() lastUpdate?: Date
  @Output() refresh = new EventEmitter<void>()
  @Output() details = new EventEmitter<void>()

  constructor() { }

  public emitRefresh(): void {
    this.refresh.emit()
  }

  public emitDetails(): void {
    this.details.emit()
  }

}
