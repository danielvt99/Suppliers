import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Supplier } from 'src/app/core/models/suppliers';
import { HttpService } from 'src/app/core/http/http.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent implements OnInit{
  supplierForm: FormGroup;
  supplier: Supplier = {}
  path:string = 'Suppliers'
  isEditPage:boolean  = false;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private http:HttpService,
    private dialog: DialogComponent) {
      this.supplierForm = this.formBuilder.group({
        name: ['', Validators.required],
        telephoneNumber: ['', Validators.required]
      });
  }

  onSubmit() {
    if (this.supplierForm.valid) {
      if(this.isEditPage){

      }
      else{
        this.createSupplier()
      }
      // Perform form submission logic, e.g., save the supplier data
      console.log(this.supplierForm.value);
    }
  }

  createSupplier(){
    this.http.post(this.path, this.supplierForm.value).subscribe((resp:any) => {
      console.log(resp)
    })
  }

  updateSupplier(){
    // this.http.getPage(this.path, this.pageNumber, this.pageSize).subscribe((resp:any) => {
    //   // this.dataSource = resp.results;
    //   // this.pageLength = resp.totalCount;
    // })
  }

  populateItems(){
    this.supplierForm = this.formBuilder.group({
      name: [this.supplier.name, Validators.required],
      telephoneNumber: [this.supplier.telephoneNumber, Validators.required]
    });
  }

  ngOnInit(): void {
    let state = history.state;
    this.supplier = state['supplier'] 
    if(!state == null){
      this.isEditPage = true;
      this.populateItems();
    }  
  }
}
