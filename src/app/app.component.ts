import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { RazorpayService } from './services/razorpay.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    private razorpay: RazorpayService
  ) {
    this.initializeApp();
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.auth.authenticationState.subscribe(state => {
        if(state){
          this.razorpay.paymentDetails(this.auth.user.id).subscribe(res =>{
            if(res.payments.length!== 0 || this.auth.userRole === 'admin'){
              this.router.navigate(['/','main']);  
            }else{
              this.router.navigate(['/','main','tabs','razorpay']);  
            }
          })
       
          
        }else{
          this.router.navigate(['/','auth','signin']);
        }
      })
    });
  }
 
 
  ngOnInit() {}
 

  
 
}
