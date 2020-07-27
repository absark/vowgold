import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../services/shared.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  user = null;

  constructor(
    private auth: AuthService,
    private loading: LoadingController,
    private service:SharedService
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    if(this.service.user){
      this.loading.create({
        message:'Loading...'
      }).then(el=>{el.present()});
      this.service.getUser().subscribe(res => {
        this.loading.dismiss();
        this.user = res.user;
      },
      err=>{
        this.loading.dismiss();
        this.auth.showAlert(err.error.message);
      }
      )
     }

    
  }
   

}
