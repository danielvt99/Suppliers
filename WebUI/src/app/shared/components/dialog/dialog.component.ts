import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
    constructor(
      public dialog: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    @Output() buttonClicked = new EventEmitter<string>();    

    onButtonClicked(button: string): void {
      this.dialog.close(button);
    }
}
