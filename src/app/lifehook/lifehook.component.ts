import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.css']
})

export class LifehookComponent implements OnInit {

  websiteList: any = ['abc', 'xyz.com', 'pqr.com']
  
  form = new FormGroup({
    website: new FormControl('')
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  
  changeWebsite(e) {
    console.log(e.target.value);
  }

  constructor() {
    console.log(`new - data is `);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is `);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is `);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
