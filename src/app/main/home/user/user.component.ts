import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StripeService } from 'src/app/main/services/stripe.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
 @Input() user:any;
  paymentInfo:any;
  constructor(
    private modal:ModalController,
    private stripe:StripeService
  ) { }

  ngOnInit() {
    this.stripe.paymentDetails(this.user._id).subscribe(res =>{
      console.log(this.user,"Payment",res.payments);
     this.paymentInfo = res.payments;
    },
    err=>{
     this.stripe.showAlert(err.message);
    }
    )
  }
  
  onDismiss(){
    this.modal.dismiss();
  }
}
