import { Component, OnInit, Input } from '@angular/core';
import { RazorpayService } from '../../../../app/services/razorpay.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
@Input() paymentInfo:{email:string,amount:number};
@Input() phone:number;
windowRef:any;
gstAmount= 100;
  constructor(
    private razorpay:RazorpayService,
    private auth:AuthService,
    private router:Router,
    private modal:ModalController,
    private service:SharedService
  ) { }

  ngOnInit() {
    this.windowRef = this.razorpay.WindowRef;
  }

  onPayment(){
    this.razorpay.payment(this.paymentInfo).subscribe(res =>{
      const amount = res.data.amount + this.gstAmount*100;
      let options={
        "id":res.data.id,
        "amount":amount,
        "receipt":res.data.receipt,
        "currency":res.data.currency,
        "name":'VowGolds',
        "key": "rzp_test_BSjuo0zrfmh2me",
        "handler":(payment_id)=>{
          this.razorpay.paymentInfo({
          payment_id:payment_id.razorpay_payment_id,
          amount:amount/100,
          date:res.data.date,
          email:this.paymentInfo.email,
          user_id:this.auth.user.id,
          goldrate:this.service.metalRates[0].gold
          }).subscribe(res =>{
            this.router.navigate(['/','main','tabs','home'])
            setTimeout(()=>{this.modal.dismiss();},600);
          },
          err=>{
           this.auth.showAlert(err.error.message);
          })
        
        },
       "prefill": {
           "email": this.paymentInfo.email,
           "contact":this.phone
       }
      };
     const pay= new  this.windowRef.Razorpay(options);
      pay.open();

    })
  }
  onDismiss(){
      this.modal.dismiss();
  }
}
