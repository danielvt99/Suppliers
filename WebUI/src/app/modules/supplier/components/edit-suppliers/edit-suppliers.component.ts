import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/core/models/suppliers';
import { HttpService } from 'src/app/core/http/http.service';
import { DialogService } from 'src/app/core/dialog/dialog.service';

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

  action: string = 'Update'
  title:string = 'Success';
  message:string = `Successfully ${this.action}d record.`;

  constructor(
    private formBuilder: FormBuilder, 
    private http:HttpService,
    private dialog: DialogService,
    private router: Router) {
      //Initialize with empty fields
      this.supplierForm = this.formBuilder.group({
        id: [''],
        name: ['', Validators.required],
        telephoneNumber: ['', Validators.required]
      });
  }

  onSubmit() {
    if (this.supplierForm.valid) {
      if(this.isEditPage){
        this.updateSupplier()
      }
      else{
        this.createSupplier()
      }
    }
  }

  //Add new entry into the database
  createSupplier(){
    this.http.post(this.path, this.supplierForm.value).subscribe((resp:any) => {
      this.getStatusTitleAction(resp);
      this.showStatusDialog();
    },    
    (error:any) => {
      // Handle error here
      this.dialog.openDialog('Error', error.message)
      console.error('Error:', error);
    })
  }


  //There are different statuses depending on whether or not it's an edit page.
  getStatusTitleAction(resp:any){
    if(this.isEditPage){
      this.action = 'Update'
    }
    else{
      this.action = 'Create'
    }
    this.message = `Successfully ${this.action}d record.`

    if(!resp || !resp.id){
      this.title = 'Failed',
      this.message = `Could not ${this.action} supplier.`
    }
  }

  showStatusDialog(){
    this.dialog.openDialog(this.title, this.message)
    this.dialog.afterClosed().subscribe((action:any) => {
      if (action === 'No') {
        // No button was clicked
        console.log('No button clicked.');
      } else if (action === 'Ok') {
        // Ok button was clicked
        if(this.title != 'Failed')
        {
          this.router.navigate(['supplier', 'list']);
        }
      }
    })
  }


  //With updates it's generally a good idea to prompt for confirmation. Especially when the data is live.
  updateSupplier(){
    let title = 'Confirm'
    let message = 'Are you sure you want to update this record?'
    let isConfirmation = true;
    this.dialog.openDialog(title, message, isConfirmation)
      this.dialog.afterClosed().subscribe((result:any) => {
        if (result === 'No') {
          console.log('No button clicked.');
        } else if (result === 'Yes') {
          this.http.put(this.path, this.supplierForm.value).subscribe((resp:any) => {
            this.getStatusTitleAction(resp);
            this.showStatusDialog();
          },    
          (error:any) => {
            // Handle error here
            this.dialog.openDialog('Error', error.message)
            console.error('Error:', error);
          })
        }
    })
  }


  populateSupplier(){
    this.supplierForm = this.formBuilder.group({
      supplierId: [this.supplier.supplierId],
      name: [this.supplier.name, Validators.required],
      telephoneNumber: [this.supplier.telephoneNumber, Validators.required]
    });
  }

  ngOnInit(): void {
    let state = history.state;
    this.supplier = state['supplier'] 
    if(this.supplier != null){
      this.isEditPage = true;
      this.populateSupplier();
    }  
  }
}
