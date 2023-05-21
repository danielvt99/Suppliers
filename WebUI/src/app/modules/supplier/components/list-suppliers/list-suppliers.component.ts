import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { Supplier } from 'src/app/core/models/suppliers';
import { DialogService } from 'src/app/core/dialog/dialog.service';


@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent {

  dataSource: Supplier[] = [];
  displayedColumns: string[] = ['SupplierId', 'Name', 'TelephoneNumber', 'View'];

  pageNumber: number = 0;
  pageSize: number = 8;
  pageLength: number = 0;
  pageSizeOptions: number [] = [8, 16, 24, 100]
  path:string = 'Suppliers'

  isMobile: boolean;
  
  options: {} = {}

  constructor(private http:HttpService,  
    private router: Router,
    private dialog: DialogService,
  ){
    this.getSuppliers();
    this.isMobile = this.checkIfMobileDevice();
  }

  //Generic way of getting suppliers so it can be reused in the search.
  getSuppliers(search?:string){
    this.http.getPaged(this.path, this.pageNumber, this.pageSize, search).subscribe((response:any) => {
      // Handle successful response here
      this.dataSource = response.results;
      this.pageLength = response.totalCount;
    },
    (error:any) => {
      // Handle error here
      this.dialog.openDialog('Error', error.message)
      console.error('Error:', error);
    })
  }

  checkIfMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  createSupplier(){
    this.router.navigate(['supplier', 'create']);
  }

  editField(element:any){
    this.router.navigate(['supplier', 'edit'],{state: { supplier: element }});
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getSuppliers();
  }
}
