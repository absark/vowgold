import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../services/shared.service';
import { LoadingController } from '@ionic/angular';
import { RazorpayService } from 'src/app/services/razorpay.service';

@Component({
  selector: 'app-monthlyscheme',
  templateUrl: './monthlyscheme.page.html',
  styleUrls: ['./monthlyscheme.page.scss'],
})
export class MonthlyschemePage implements OnInit {
   url = environment.url;
   result = 0;
   rates;
   gold;
   silver;
  constructor(
    private auth:AuthService,
    private razorpay: RazorpayService,
    private loading:LoadingController,
    private service:SharedService
  ) { }

  ngOnInit() {
    this.loading.create({
      message:'Loading...'
    }).then(el=>{el.present()});
    this.rates = this.service.metalRates;
    this.razorpay.paymentDetails(this.auth.user.id).subscribe(res =>{
      this.loading.dismiss();
      res.payments.forEach(el =>this.result += el.amount);
      this.gold = (this.result/this.rates[0].gold).toFixed(3);
      this.silver = (this.result/this.rates[0].silver).toFixed(3);
    },
    err=>{
      this.loading.dismiss();
      this.auth.showAlert(err.error.message);
    });
  
  

  
}

}
