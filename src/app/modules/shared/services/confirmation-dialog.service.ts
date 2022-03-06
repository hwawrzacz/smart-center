import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component'
import { ConfirmationDialogData } from '../models/confirmation-dialog-data'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  constructor(private dialog: MatDialog) { }

  public confirmAction(action: () => any, dialogData: ConfirmationDialogData): void {
    this.dialog
      .open(ConfirmationDialogComponent, {data: dialogData})
      .afterClosed()
      .pipe(tap(action))
      .subscribe()
  }
}
