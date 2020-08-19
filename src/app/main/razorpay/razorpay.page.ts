import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { SharedService } from '../services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { Router } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.page.html',
  styleUrls: ['./razorpay.page.scss'],
})
export class RazorpayPage implements OnInit {
  paymentDetails:any=[];
  payment:FormGroup;
  email:string;
  phone:number;
  error:string;
  dayOfMonth ;
  noOfplan:number;
  constructor(
    private formBuilder: FormBuilder,
    private service:SharedService,
    private loading:LoadingController,
    private auth:AuthService,
    private modal:ModalController,
    private razorpay:RazorpayService,
    private router:Router
    ) { 
    
    }
 
  ngOnInit() {
    this.payment = this.formBuilder.group({
      email:[ this.email, [Validators.required,Validators.email]],
      amount:[null,[Validators.required]]
    });
   
    
  }

  ionViewWillEnter(){
    this.loading.create({
      message:'Loading...'
    }).then(el=>{el.present()});

   if(this.service.user){
    this.service.getUser().subscribe(res => {
      // Get payment Details
      this.razorpay.paymentDetails1(this.auth.user.id,res.user.plans).subscribe(res =>{
        this.loading.dismiss();
        this.paymentDetails.push(...res.payments);
        this.checkOutDays(this.paymentDetails[this.paymentDetails.length - 1].date)
       },
       error=>{
        this.loading.dismiss();
         this.auth.showAlert(error.error.message);
       }
       );
      this.email = res.user.email;
      this.phone = res.user.mobile;
      this.noOfplan = res.user.plans;
      this.ngOnInit();
    },
    err=>{
      this.loading.dismiss();
      this.auth.showAlert(err.error.message);
    })
   }
  }



  onSubmit(form:NgForm){
  
    this.error = '';
    if (this.payment.invalid) {
        return;
    }
    if(form.value.amount<999){
      this.error = 'Amount must be greater than 999';
      return;
    }
    this.modal.create({
      component:PaymentComponent,
      componentProps:{
       paymentInfo:this.payment.value,
       phone:this.phone,
       planNo:this.noOfplan
      }
    }).then(el=>{
      el.present();
    })
  
   
  }

  // calculate the day from the last payment
  checkOutDays(date){
     let currentdate = new Date().getTime();
     let difference = Math.trunc((currentdate - new Date(date).getTime())/(1000*3600*24));
     this.dayOfMonth = +difference;
  }


  // After payment disabled the payment button for next 28 days
  ondisable(){
    if(this.dayOfMonth < 28){
      return true
    }
  }

  //for starting new plan
  onStartNewPlan(){
    const planNo = +this.paymentDetails[this.paymentDetails.length - 1].planNo+1;
    this.service.updatePlan({plans:planNo})
    .subscribe(res=>{
      this.router.navigate(['/','main','tabs','home']);
    },
    err=>{
      this.auth.showAlert(err.error.message);
    });

}
}
