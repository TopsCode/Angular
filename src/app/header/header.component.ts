import { Component, OnInit } from '@angular/core';




// inside @Component decorator we hv selector and with the help of this selector we cn access this component somewhere else 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  useridlocal:any = '';
  constructor() {
    // console.log(localStorage.getItem('userid'));
    // this.userid =  localStorage.getItem('userid');
    this.useridlocal =  localStorage.getItem('userid');
  }
  Title:string = "TOPS"
  color:string = "green"
  ngOnInit(): void {
  }
  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }
}
