import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  name = 'Angular';
   
  form: FormGroup;
  webData = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Laravel' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'React' }
  ];
  
  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
  
    this.addCheckboxesToForm();
  }
  
  private addCheckboxesToForm() {
    this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }
  // checked:any =''
  // v:any =''
  // i:any =''
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked, i) => checked ? this.webData[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
  ngOnInit(): void {
  }
}
