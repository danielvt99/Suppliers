import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSuppliersComponent } from './components/edit-suppliers/edit-suppliers.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';

const routes: Routes = [
  { path: 'edit', component: EditSuppliersComponent },
  { path: 'list', component: ListSuppliersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
