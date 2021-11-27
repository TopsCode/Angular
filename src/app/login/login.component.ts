import { Component, OnInit } from '@angular/core';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatCardHarness} from '@angular/material/card/testing';
import { Subscriber } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fetchData:any[] = []
  username = ''
  password = ''
  constructor(private api:ApiService) { }
  ngOnInit(): void {
  }
  logindata(){
    // console.log(this.username);
    // console.log(this.password);
    this.api.loginapi(this.username,this.password).subscribe(resdata => {
      this.fetchData = resdata;
    })
  }
}
