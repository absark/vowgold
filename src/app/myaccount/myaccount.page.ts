import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  user = null;
  constructor(
    private auth:AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    if(this.auth.user){
      this.auth.getUser().subscribe(res => {
        const result = res as any;
        this.user = result.user;
      },
      err=>{
        this.auth.showAlert(err.message);
      }
      )
     }
  }


  onupdateUser(){
    this.modalCtrl.create({
      component:UpdateUserComponent,
      componentProps:{
        name:this.user.name,
        email:this.user.email,
        mobile:this.user.mobile
      }
    }).then( modal =>{
      modal.present();
      return modal.onDidDismiss()
    }).then(user=>{
     if(user.data!==undefined){
      this.user = {...user.data};
      this.auth.isChange = this.user;
     }
    })
  }


  onPasswordUpdate(){
    this.modalCtrl.create({
      component:UpdatePasswordComponent
    }).then(modal =>{
      modal.present();
    })
  }
}
