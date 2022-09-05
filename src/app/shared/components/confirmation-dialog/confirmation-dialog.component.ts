import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ConfirmationDialogData } from './models/confirmation-dialog-data'

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  public readonly title: string
  public readonly message: string
  public readonly confirmText?: string
  public readonly warn?: boolean


  constructor(
    @Inject(MAT_DIALOG_DATA) data: ConfirmationDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {
    this.title = data.title
    this.message = data.message
    this.confirmText = data.confirmText
    this.warn = data.warn
  }

  public confirm(): void {
    this.dialogRef.close(true)
  }

  public cancel(): void {
    this.dialogRef.close(false)
  }
}
