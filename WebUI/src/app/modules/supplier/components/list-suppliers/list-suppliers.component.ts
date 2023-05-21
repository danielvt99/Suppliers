import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { Supplier } from 'src/app/core/models/suppliers';


@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent implements AfterViewInit {

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
    private renderer: Renderer2){
    this.getSuppliers();
    this.isMobile = this.checkIfMobileDevice();
  }

  getSuppliers(search?:string){
    this.http.getPaged(this.path, this.pageNumber, this.pageSize, search).subscribe((resp:any) => {
      this.dataSource = resp.results;
      this.pageLength = resp.totalCount;
    })
  }

  checkIfMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  setMobileProperties(){
    const rows = document.querySelectorAll('.supplier-table tr')
    const rows2 = document.querySelectorAll('.tr');
    const rows3 = document.querySelectorAll('tr.mat-row');


      rows.forEach(row => {
        this.renderer.addClass(row, 'clickable-row');
        this.renderer.listen(row, 'click', () => {
          this.editField(row);
        });
      });
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

  ngAfterViewInit() {
    if (this.isMobile) {
      this.setMobileProperties();
    }
  }
}
