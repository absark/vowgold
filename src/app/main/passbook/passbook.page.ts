import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StripeService } from '../services/stripe.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  paymentHistory:any = [];
  constructor(
    private stripe: StripeService,
    private loading:LoadingController,
    private auth: AuthService
    ) {
   
   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loading.create({
      message:'Loading...'
    }).then(el=> el.present());
    this.stripe.paymentDetails(this.auth.user.id).subscribe(res =>{
      this.loading.dismiss();
     this.paymentHistory = res;
    },
    error=>{
      this.auth.showAlert(error.error.message);
    }
    );
  }

}
