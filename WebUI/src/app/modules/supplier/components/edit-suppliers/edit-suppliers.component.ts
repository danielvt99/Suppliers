import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent implements OnInit{
  supplierForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.supplierForm = this.formBuilder.group({
      name: ['', Validators.required],
      telephoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.supplierForm.valid) {
      // Perform form submission logic, e.g., save the supplier data
      console.log(this.supplierForm.value);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      console.log(paramMap.get('bank'));
  })
  }
}
