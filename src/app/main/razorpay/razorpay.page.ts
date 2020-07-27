import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { SharedService } from '../services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { RazorpayService } from 'src/app/services/razorpay.service';
import { Router } from '@angular/router';
declare var Razorpay;
@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.page.html',
  styleUrls: ['./razorpay.page.scss'],
})
export class RazorpayPage implements OnInit {
  payment:FormGroup;
  windowRef:any;
  email:string;
  phone:number;
  error:string;
  constructor(
    private formBuilder: FormBuilder,
    private razorpay:RazorpayService,
    private service:SharedService,
    private loading:LoadingController,
    private auth:AuthService,
    private router:Router
    ) { }
 
  ngOnInit() {
    this.payment = this.formBuilder.group({
      email:[ this.email, [Validators.required,Validators.email]],
      amount:[null,[Validators.required]]
    });
    this.windowRef = this.razorpay.WindowRef;
    
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
    
    this.razorpay.payment(this.payment.value).subscribe(res =>{
      let options={
        "id":res.data.id,
        "amount":res.data.amount,
        "receipt":res.data.receipt,
        "currency":res.data.currency,
        "name":'VowGolds',
        "key": "rzp_test_BSjuo0zrfmh2me",
        "handler":(payment_id)=>{
          this.razorpay.paymentInfo({
          payment_id:payment_id.razorpay_payment_id,
          amount:res.data.amount/100,
          date:res.data.date,
          email:form.value.email,
          user_id:this.auth.user.id
          }).subscribe(res =>{
            form.reset();
            setTimeout(()=>{this.router.navigate(['/','main','tabs','home'])},1500);
          },
          err=>{
           this.auth.showAlert(err.error.message);
          })
        
        },
       "prefill": {
           "email": form.value.email,
           "contact":this.phone
       }
      };
     const pay= new  this.windowRef.Razorpay(options);
      pay.open();
      console.log(pay);

    })
   
  }

  callbackFun(paymentInfo){
      console.log("Handler",paymentInfo)
  }
}
