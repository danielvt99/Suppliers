import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { EditSuppliersComponent } from './components/edit-suppliers/edit-suppliers.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    EditSuppliersComponent,
    ListSuppliersComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MatTableModule
  ]
})
export class SupplierModule { }
