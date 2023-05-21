import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  dialogRef!: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, message: string, isConfirmation: boolean = false): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: title,
        message: message,
        isConfirmation: isConfirmation
      }
    });
  }

  afterClosed() {
    return this.dialogRef.afterClosed();
  }
}
