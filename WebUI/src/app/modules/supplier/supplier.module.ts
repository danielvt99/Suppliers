import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SupplierRoutingModule } from './supplier-routing.module';
import { EditSuppliersComponent } from './components/edit-suppliers/edit-suppliers.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';
import {MatTableModule} from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    EditSuppliersComponent,
    ListSuppliersComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers:[
    DialogComponent
  ]
})
export class SupplierModule { }
