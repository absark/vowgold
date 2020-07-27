import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../services/shared.service';
import { ModalController } from '@ionic/angular';
import { UserComponent } from './user/user.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   url = environment.url;
   userRole;
   users;
   rates;
  constructor(
    private auth: AuthService,
    private service: SharedService,
    private modal: ModalController,
    private http : HttpClient
  ) { 
    this.userRole = this.auth.userRole;
    this.service.getUsers().subscribe(res => {
      this.users = res.users;
     },
     err=>{
       this.auth.showAlert(err.error.message);
     });
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.http.get<any>(`${this.url}/api/v1/users/rates`).subscribe(res=>{
      this.rates = res.rates;
   },
   err=>{
     this.auth.showAlert(err.error.message);
   });
  }

  
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };
 

  onUser(user){
    this.modal.create({
      component:UserComponent,
      componentProps:{
        user:user
      }
    }).then( modal => {
      modal.present();
     
    });
 }
   
 doRefresh(event){
  this.http.get<any>(`${this.url}/api/v1/users/rates`).subscribe(res=>{
    this.rates = res.rates;
    event.target.complete();
 },
 err=>{
   this.auth.showAlert(err.error.message);
 });
 

 }
}
