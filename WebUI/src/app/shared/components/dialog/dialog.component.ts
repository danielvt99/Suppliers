import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
    constructor(public dialog: MatDialog) {}
    
    title: string  = '';
    message: string  = '';

    openDialog(title: string, message: string): void {
      this.title = title;
      this.message = message;
      this.dialog.open(DialogComponent, {
        width: '250px'
      });
    }

    getDialog(title: string, message: string): void {
      this.title = title;
      this.message = message;
      this.dialog.open(DialogComponent, {
        width: '250px'
      });
    }
}
