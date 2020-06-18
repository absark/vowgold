
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
const USER_KEY = 'access_user';

@Injectable({
    providedIn: 'root'
  })

export class StripeService {
    url = environment.url;
    
    
    constructor (
        private http:HttpClient,
        private alertController:AlertController,
        ){}


    payment(data){
        return this.http.post<{status:string,paymentObj:any}>(`${this.url}/api/v1/stripe/payment`,data) ;
      }
      paymentInfo(data){
        return this.http.post(`${this.url}/api/v1/stripe/payment-info`,data) ;
      }
      paymentDetails(user){
        return this.http.get<{status:string,payments:string}>(`${this.url}/api/v1/stripe/payment-details/${user}`);
      }

      showAlert(msg) {
        let alert = this.alertController.create({
          message: msg,
          header: 'Error',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
      }
}
