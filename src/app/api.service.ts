import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  // getAllUsers():Observable<any> { 
  getAllUsers():Observable<any> { 
    return this.http.get("https://justjay.000webhostapp.com/api/allusers");
    // console.log(res);
  }
  loginapi(username:string,password:string):Observable<any> { 
    return this.http.get<any>('https://justjay.000webhostapp.com/api/login?username='+username+'&password='+password);
    // console.log(res);
  }
  registration(username:string,password:string){
    return this.http.get<any>('https://justjay.000webhostapp.com/api/registration?username='+username+'&password='+password);
  }
  allproducts(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'});
    return this.http.get<any>('http://jayamin.freecluster.eu/controller/controller.php/getallproducts',{headers: headers});
  }
}
