
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })

export class RazorpayService {
    url = environment.url;
    get WindowRef() {
        return window;
      };
    
    constructor (
        private http:HttpClient,
        private auth:AuthService
        ){}


   paymentDetails(user){
    return this.http.get<{status:string,payments:any}>(`${this.url}/api/v1/razorpay/payment-details/${user}`);
  }
  payment(data){
    return this.http.post<any>(`${this.url}/api/v1/razorpay/payment`,data) ;
  }
  paymentInfo(data){
    return this.http.post(`${this.url}/api/v1/razorpay/payment-info`,data) ;
  }

}