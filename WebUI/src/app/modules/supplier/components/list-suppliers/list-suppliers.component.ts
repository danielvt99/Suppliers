import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Supplier } from 'src/app/core/models/suppliers';


@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent {

  dataSource: Supplier[] = [];
  displayedColumns: string[] = ['SupplierId', 'Name', 'TelephoneNumber'];

  pageNumber: number = 1;
  pageSize: number = 10;

  path:string = 'Suppliers'
  options: {} = {}

  constructor(private http:HttpService){
    this.getSuppliers();
  }

  getSuppliers(){
    this.http.getPage(this.path, this.pageNumber, this.pageSize).subscribe((resp:any) => {
      console.log(resp)
      this.dataSource = resp.results;
    })
  }
}
