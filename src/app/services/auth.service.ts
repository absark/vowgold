import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


const TOKEN_KEY = 'access_token';
const USER_ROLE = 'access_role';
@Injectable({
  providedIn: 'root',
 
})
export class AuthService {

  url = environment.url;
  user = null;
  token;
  userRole;
  authenticationState = new BehaviorSubject(false);
 
  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private alertController: AlertController, 
    private loading:LoadingController,
    private router:Router
    ) {
  this.storage.get(USER_ROLE).then(user =>{
    this.userRole = user.role;
  });
  this.checkToken();
  }
  getToken(){
    return this.token;
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      
      if (token) {
       this.token = token;
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
 
 
  login(credentials) {

      this.loading.create({message:'Login...'}).then(el =>{
       el.present();
     });

    return this.http.post<{status:string,token:string,user:any}>(`${this.url}/api/v1/users/login`, credentials,{responseType:'json'})
      .subscribe(
        res => {
        this.token = res.token;
        this.userRole = res.user.role;
        this.checkToken();
        this.loading.dismiss();
        this.storage.set(TOKEN_KEY, res['token']);
        this.storage.set(USER_ROLE, res.user);
        this.user = this.helper.decodeToken(res['token']);
        this.authenticationState.next(true);
      },
          
      err => {  
        this.loading.dismiss();
        if(err.status===404){
        this.showAlert('Invalid email and password !');
        }
        throw new Error(JSON.stringify(err));
        }
      )
  };
 
   forgotPassword(email){
    return this.http.post(`${this.url}/api/v1/users/forgotpassword`, email);
   }
   resetPassword(token, data){
    return this.http.patch(`${this.url}/api/v1/users/resetpassword/${token}`, data);
   }



 async logout() {
   this.token = null;
    await this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.router.navigate(['/','auth','signin']);
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

  


}