
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
const USER_KEY = 'access_user';

@Injectable({
    providedIn: 'root'
  })

export class StripeService {
    url = environment.url;
    user = null;
    constructor (
        private http:HttpClient,
        private router:Router,
        private storage:Storage){}

    payment(data){
        return this.http.post(`${this.url}/api/v1/stripe/payment`,data) ;
      }
      paymentInfo(data){
        return this.http.post(`${this.url}/api/v1/stripe/payment-info`,data) ;
      }
      paymentDetails(user){
        return this.http.get(`${this.url}/api/v1/stripe/payment-details/${user}`);
      }
}
