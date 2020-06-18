import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { StripeService } from '../main/services/stripe.service';
import { Router } from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


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
    private transfer: FileTransfer,
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private alertController: AlertController, 
    private loading:LoadingController,
    private stripe:StripeService,
    private router:Router
    ) {
  this.storage.get(USER_ROLE).then(user =>{
    this.userRole = user.role;
  });
     console.log("called");
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
 


  register(
    name:string,
    email:string,
    password:string,
    passwordConfirm:string,
    mobile:string,
    image:any
  ) {
    
    // this.loading.create({message:'SignUp...'}).then(el =>{
    //   el.present();
    // });
  
   const userData = new FormData();
   
   
    userData.append("name",name);
    userData.append("email",email);
    userData.append("password",password);
    userData.append("passwordConfirm", passwordConfirm);
    userData.append("mobile",mobile);
    userData.append("image",image,image.name);
   
    return this.http.post<any>(`${this.url}/api/v1/users/signup`, userData);
    // .subscribe(res => {
    //    console.log("REsut",res);
    //     // this.loading.dismiss();
    //     // this.token = res.token;
    //     // this.userRole = res.user.role;
    //     // this.storage.set(TOKEN_KEY, res.token);
    //     // this.storage.set(USER_ROLE, res.user);
    //     // this.user = this.helper.decodeToken(res['token']);
    //     // this.authenticationState.next(true);
        
    //   },
    //   err => {
    //     this.loading.dismiss();
    //     this.showAlert(err.message);
    //     throw new Error(JSON.stringify(err));
    //   }
    // );
  }
 
  login(credentials) {

      this.loading.create({message:'Login...'}).then(el =>{
       el.present();
     });

    return this.http.post<{status:string,token:string,user:any}>(`${this.url}/api/v1/users/login`, credentials,{responseType:'json'})
      .subscribe(res => {
        this.token = res.token;
        this.userRole = res.user.role;
        this.checkToken();
         console.log("LOGIN",res);
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
    console.log("tOken",email);
    return this.http.post(`${this.url}/api/v1/users/forgotpassword`, email);
   }
   resetPassword(token, data){

    console.log("tOken",token);
    console.log("New password",data);
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