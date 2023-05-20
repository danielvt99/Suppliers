import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { Supplier } from 'src/app/core/models/suppliers';


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
  
  options: {} = {}

  constructor(private http:HttpService,  private router: Router ){
    this.getSuppliers();
  }

  getSuppliers(){
    this.http.getPaged(this.path, this.pageNumber, this.pageSize).subscribe((resp:any) => {
      this.dataSource = resp.results;
      this.pageLength = resp.totalCount;
    })
  }

  searchSuppliers(search:string){
    this.http.getPaged(this.path, this.pageNumber, this.pageSize, search).subscribe((resp:any) => {
      this.dataSource = resp.results;
      this.pageLength = resp.totalCount;
    })
  }

  createSupplier(){
    this.router.navigate(['supplier', 'edit']);
  }

  editField(element:any){
    this.router.navigate(['supplier', 'edit'],{state: { supplier: element }});
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateItems();
  }

  updateItems() {
    const startIndex = this.pageNumber * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.getSuppliers();
    // this.pageSize = this.pageSizeOptions.slice(startIndex, endIndex);
  }
}
