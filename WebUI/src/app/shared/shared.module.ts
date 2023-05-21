import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from '../material/material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ],
  bootstrap:[
    HeaderComponent
  ],
  providers:[
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}} 
  ]
})
export class SharedModule { }
