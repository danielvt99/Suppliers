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

  pageNumber: number = 1;
  pageSize: number = 8;
  pageLength: number = 0;
  pageSizeOptions: number [] = [8, 16, 24, 100]
  path:string = 'Suppliers'
  
  options: {} = {}

  constructor(private http:HttpService,  private router: Router ){
    this.getSuppliers();
  }

  getSuppliers(){
    this.http.getPage(this.path, this.pageNumber, this.pageSize).subscribe((resp:any) => {
      console.log(resp)
      this.dataSource = resp.results;
    })
  }

  editField(){
    this.router.navigate(['supplier', 'edit', { id: 1 }]);
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateItems();
  }

  updateItems() {
    const startIndex = this.pageNumber * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // this.pageSize = this.pageSizeOptions.slice(startIndex, endIndex);
  }
}
