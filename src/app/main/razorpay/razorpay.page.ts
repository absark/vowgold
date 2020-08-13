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
  payment:FormGroup;
  email:string;
  phone:number;
  error:string;
  constructor(
    private formBuilder: FormBuilder,
    private service:SharedService,
    private loading:LoadingController,
    private auth:AuthService,
    private modal:ModalController
    ) { }
 
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
      this.loading.dismiss();
      this.email = res.user.email;
      this.phone = res.user.mobile;
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
       phone:this.phone
      }
    }).then(el=>{
      el.present();
    })
  
   
  }

 
}
