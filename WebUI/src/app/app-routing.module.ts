import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { 
    path: '', 
    redirectTo: '/supplier/list', 
    pathMatch: 'full' 
  },
  { 
    path:'supplier',
    loadChildren: () => import('./modules/supplier/supplier.module').then(m => m.SupplierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }