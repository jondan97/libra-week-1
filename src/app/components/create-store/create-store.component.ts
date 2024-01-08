import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.scss'
})
export class CreateStoreComponent {
  form!: FormGroup

  ngOnInit(){
    this.setFormValues();
  }

  // form binding
  setFormValues(){
    this.form = new FormGroup({
      firstname: new FormControl({value: "Hello", disabled: true}, Validators.required),
      lastname: new FormControl("", Validators.required),
      receiveNotifications: new FormControl(true),
      stars: new FormControl("5")
    });
  }

  onSubmit(){
    if(this.form.valid){
      // service backend call
      console.log("valid!");
    } else {
      // error message
      this.form.markAllAsTouched();
      console.log("invalid");
    }
    console.log(this.form);
  }
}
