import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { RazorpayService } from 'src/app/services/razorpay.service';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  paymentHistory:any = [];
  constructor(
    private razorpay: RazorpayService,
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
    this.razorpay.paymentDetails(this.auth.user.id).subscribe(res =>{
      this.loading.dismiss();
     this.paymentHistory = res;
    },
    error=>{
      this.auth.showAlert(error.error.message);
    }
    );
  }

}
