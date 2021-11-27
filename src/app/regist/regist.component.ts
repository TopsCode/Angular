import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  
  responseData:any[] = []
  username = ''
  password = ''
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.allproducts().subscribe(resdata => {
      this.responseData = resdata;
      console.log(this.responseData);
    })
  }
  storeregistdata(){
    this.api.registration(this.username,this.password).subscribe(resdata => {
      this.responseData = resdata;
      console.log(this.responseData);
    })
    
  }
}
