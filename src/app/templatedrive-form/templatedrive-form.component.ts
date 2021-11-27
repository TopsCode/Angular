import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrive-form',
  templateUrl: './templatedrive-form.component.html',
  styleUrls: ['./templatedrive-form.component.css']
})
export class TemplatedriveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'FormsInAngular';  
  name: string = "";  
  city: string = "";  
  state: string = "";  
  address: string = "";  
  zip: string = "";  
  email: string = "";  
  password: string = "";  
  isMarried: boolean;  
  onSubmit(DemoForm:any){ 
       
  //   console.log(DemoForm);  
  //   console.log("Name :- " + this.name);  
  //   console.log("City :- " + this.city);  
  //   console.log("State :- " + this.state);  
  //   console.log("Zip :- " + this.zip);  
  //   console.log("Email :- " + this.email);  
  //   console.log("Password :- " + this.password);  
  //   console.log("IsMarried :- " + this.isMarried);  
  }  
}
