import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loginrev',
  templateUrl: './loginrev.component.html',
  styleUrls: ['./loginrev.component.css']
})
export class LoginrevComponent implements OnInit {
  username= '';
  password= '';
  errorMsg= '';
  constructor(private apiAccess:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  logindata(){
    // console.log("called");
    // console.log(this.username);
    // console.log(this.password);
    
    if (this.password != '' && this.username !='') {
      this.apiAccess.loginapi(this.username,this.password).subscribe(response=>{
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.Data));
        localStorage.setItem('userid', response.Data.user_id);
        if (response.Data.role_id == 1) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['home']);
          
        }
      })
    } else {
      this.errorMsg = "User name and password is required";

    }
  }
}
