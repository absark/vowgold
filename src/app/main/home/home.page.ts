import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../services/shared.service';
import { ModalController } from '@ionic/angular';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   userRole;
   users;
  constructor(
    private auth: AuthService,
    private service: SharedService,
    private modal: ModalController
  ) { 
    this.userRole = this.auth.userRole;
    this.service.getUsers().subscribe(res => {
      this.users = res.users;
     })
  }

  ngOnInit() {

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
}
