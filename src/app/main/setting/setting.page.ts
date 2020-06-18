import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
    user:any = null;
  constructor(
        private auth:AuthService,
        private service: SharedService,
        private modalCtrl: ModalController
        )
         { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.auth.user){
      this.service.getUser().subscribe(res => {
        this.user = res.user;
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
        mobile:this.user.mobile,
        address:this.user.address,
        panCard:this.user.panCard,
        adhaar:this.user.adhaar
      }
    }).then( modal =>{
      modal.present();
      return modal.onDidDismiss()
    }).then(user=>{
     if(user.data!==undefined){
      this.user = {...user.data};
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
