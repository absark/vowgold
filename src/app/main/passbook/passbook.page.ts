import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { SharedService } from '../services/shared.service';

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
    private auth: AuthService,
    private service:SharedService
    ) {
   
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loading.create({
      message:'Loading...'
    }).then(el=>{el.present()});

   if(this.service.user){
    this.service.getUser().subscribe(res => {
      // Get payment Details
      this.razorpay.paymentDetails1(this.auth.user.id,res.user.plans).subscribe(res =>{
        console.log(res.payments);
        this.paymentHistory.push(...res.payments);
        this.loading.dismiss();
       },
       error=>{
        this.loading.dismiss();
         this.auth.showAlert(error.error.message);
       }
       );
       
    },
    err=>{
      this.loading.dismiss();
      this.auth.showAlert(err.error.message);
    })
   }
  }
}
