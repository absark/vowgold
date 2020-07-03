import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalController, LoadingController } from '@ionic/angular';
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
    userRole;
  constructor(
        private auth:AuthService,
        private service: SharedService,
        private modalCtrl: ModalController,
        private loading:LoadingController
        )
         { 
          this.userRole = this.auth.userRole;
         }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loading.create({
      message:'Loading...'
    }).then(el=>{el.present()})
    if(this.auth.user){
      this.service.getUser().subscribe(res => {
        this.user = res.user;
        this.loading.dismiss();
      },
      err=>{
        this.auth.showAlert(err.error.message);
        this.loading.dismiss();
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
        pancard:this.user.panCard,
        adhaarcard:this.user.adhaar
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
