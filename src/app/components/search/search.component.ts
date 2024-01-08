import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  form!: FormGroup;

  ngOnInit() { // lifecycle
    this.setFormValues();
  }

  // form binding
  setFormValues() {
    this.form = new FormGroup({
      searchData: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.form.get("searchData")?.value);
    let name = this.form.get("searchData")?.value;
    // this.storeService.getByName(name).subscribe((productList) => {
    //   this.productList = productList
    // })
  }

  test(){
    console.log("hi");
    
  }
}
