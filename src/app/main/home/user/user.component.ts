import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { SharedService } from '../../services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RazorpayService } from 'src/app/services/razorpay.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
 @Input() user:any;
  paymentInfo:any;
  isUserDeleted;
  constructor(
    private modal:ModalController,
    private razorpay:RazorpayService,
    private loading:LoadingController,
    private service:SharedService,
    private auth:AuthService,
    private alert:AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    this.loading.create({
      message:'Loading...'
    }).then(el=> el.present());

    this.razorpay.paymentDetails(this.user._id).subscribe(res =>{
      this.loading.dismiss();
     this.paymentInfo = res.payments;
    },
    err=>{
      this.loading.dismiss();
     this.auth.showAlert(err.error.message);
    }
    )
  }
  
  onDismiss(){
    this.modal.dismiss();
  }

  onDelete(){
     this.alert.create({
      header: 'Delete User',
      message: 'Are you want to delete this account ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Yes',
          handler: () => {
            this.service.deleteUser().subscribe(res=>{
              this.isUserDeleted = res.message;
              this.router.navigate(['/','main','tabs','home']);
         },
         err=>{
           this.auth.showAlert(err.error.message);
         });
            
          }
        }
      ]
     }).then(el=> el.present());
    
    
  }
}
