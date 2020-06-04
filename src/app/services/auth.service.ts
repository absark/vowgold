import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { StripeService } from './stripe.service';
import { User } from '../models/user';
 
const TOKEN_KEY = 'access_token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string;
  url = environment.url;
  user = null;
  userInfo = null;
  isChange = null;
  Token;
  authenticationState = new BehaviorSubject(false);
 
  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController, 
    private loading:LoadingController,
    private stripe:StripeService
    ) {
       this.storage.get(TOKEN_KEY).then(t=>{
       this.Token= t;
      })
      console.log("STArt",this.Token);
    this.plt.ready().then(() => {
      this.checkToken();

    });

  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      this.token = token;
      if (token) {
     
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
         
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
 


  register(credentials) {
    this.loading.create({message:'SignUp...'}).then(el =>{
      el.present();
    });
    return this.http.post(`${this.url}/api/v1/users/signup`, credentials).pipe(
      tap(res => {
       
        this.loading.dismiss();
        this.storage.set(TOKEN_KEY, res['token']);
        this.user = this.helper.decodeToken(res['token']);
       
        this.authenticationState.next(true);
        
      }),
      catchError(e => {
        this.loading.dismiss();
        this.showAlert(e.message);
        throw new Error(e);
      })
    );
  }
 
  login(credentials) {

      this.loading.create({message:'Login...'}).then(el =>{
       el.present();
     });

    return this.http.post(`${this.url}/api/v1/users/login`, credentials,{responseType:'json'})
      .pipe(
        tap(res => {
         console.log("LOGIN",res);
          this.loading.dismiss();
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
          
        }),
        catchError(e => {
          const error = JSON.stringify(e);
          this.loading.dismiss();
          if(e.status===404){
            this.showAlert('Invalid email and password !');
          }
          throw new Error(error);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
   
  }
 

 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  udateUser(body){
    return this.http.patch(`${this.url}/api/v1/users/${this.user.id}`,body);
  }

  getUser(){
   return this.http.get(`${this.url}/api/v1/users/${this.user.id}`);
}

updatePassword(body){
  return this.http.patch(`${this.url}/api/v1/users/updatepassword`,body);
}
}