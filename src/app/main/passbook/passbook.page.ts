import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StripeService } from '../services/stripe.service';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  paymentHistory:any = [];
  constructor(
    private stripe: StripeService,
    private auth: AuthService
    ) {
   
   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.stripe.paymentDetails(this.auth.user.id).subscribe(res =>{
     this.paymentHistory = res;
      console.log("passbook",res) ;
    },
    error=>{
      this.auth.showAlert(error.message);
    }
    );
  }

}
