import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   userData: any[] = []; // To store the fetched user data



  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get("https://dummyjson.com/users")
  }

  getProductData(){
    return this.http.get("https://dummyjson.com/products")
  }



}
