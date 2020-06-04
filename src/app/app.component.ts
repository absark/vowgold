import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { StripeService } from './services/stripe.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  userInfo:User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    private stripe: StripeService
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.auth.authenticationState.subscribe(state => {
        if(state){
        
         if(this.auth.user.id){
           // get user details
          // setTimeout(()=>{
          //   this.auth.getUser().subscribe(res =>{
          //     const result = res as any ;
          //     this.userInfo = result.user;
          //     console.log("USERINFO",this.userInfo);
          //   },
          //   err =>{
          //     this.auth.showAlert(err.message);
          //   });
          // },1000);

         // Has user  made any payment ? 'home' : 'stripe'
           this.stripe.paymentDetails(this.auth.user.id).subscribe(e =>{
            const result = e as any;
            this.auth.userInfo = result.payments;
            if(result.payments.length !== 0){
              this.router.navigate(['/','home']);
             }else{
              this.router.navigate(['/','stripe']);
             }
          },
          err =>{
            this.auth.showAlert(err.message);
          });
         }
          
        }else{
          this.router.navigate(['/','auth','signup']);
        }
      })
    });
  }
 
  ngOnInit() {}
 
  onSignout(){
     this.auth.logout();

  }
  
}
