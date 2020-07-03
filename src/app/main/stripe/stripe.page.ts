import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { StripeService } from '../services/stripe.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
declare var Stripe; // : stripe.StripeStatic;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
})
export class StripePage implements OnInit {
   date = new Date();
   email:string;
   amount:number;
  stripe; // : stripe.Stripe;
  card;
  cardErrors;
  isSuccessfllPayment:boolean = false;
  constructor(
    private router: Router,
    private service:SharedService,
    private auth: AuthService,
    private loading:LoadingController,
    private stripeService:StripeService
     ) {
       this.service.getUser();
      }

      ionViewWillEnter(){
        this.loading.create({
          message:'Loading...'
        }).then(el=>{el.present()});
       if(this.service.user){
        this.service.getUser().subscribe(res => {
          this.loading.dismiss();
          this.email = res.user.email;
        },
        err=>{
          this.loading.dismiss();
          this.auth.showAlert(err.error.message);
        })
       }
      }


  ionViewDidEnter() {
    this.stripe = Stripe('pk_test_51GklmeDFOWNVi1aWQF7DB6KFWHwSU8eftjNhI8oj5vPEF9uRnfDl9UdpxSH2sKVXE4MqQw0uieqa6q1R8OqtsOcn000Pnt0Hiu');
    const elements = this.stripe.elements();

    var style =  {
      base: {
      
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    
    this.card = elements.create('card',{style});
    this.card.mount('#cardElement');
   
    this.card.addEventListener('change', ({ error }) => {
        this.cardErrors = error && error.message;
    });
  }
  
  ngOnInit(){}

  ionViewDidLeave(){
    this.isSuccessfllPayment =false;
  }

  async handleForm(form:NgForm) {
     // loading start
   let isloading =  await this.loading.create({message:'Processing...'});
   await isloading.present();
   if(this.email===undefined || this.amount === undefined){
       this.cardErrors= 'Please enter required Fields!';
        isloading.dismiss();
       return;
   }
   if(this.email===undefined || this.amount === undefined){
    this.cardErrors= 'Please enter required Fields!';
     isloading.dismiss();
    return;
}
if( this.amount!== 1000 && this.amount<1000){
  this.cardErrors= 'Amount must be greater then or equal to 1000';
   isloading.dismiss();
  return;
}

    const { source, error } = await this.stripe.createSource(this.card,{
      currency: 'inr',
      amount:form.value.amount*100,
      owner: {
        email:form.value.email,
        verified_email:form.value.email
      },
    });

    if (error) {
       isloading.dismiss();
      // Inform the customer that there was an error.
      this.cardErrors = 'Somthing went wrong!';
    } 
    else {

      // Send the token to your server.
      this.stripeService.payment(source).subscribe(e=>{
           const client_secret= e.paymentObj.client_secret;
       // CONFIRM THE PAYMENT
        this.stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: this.card
          }
        }).then(result=>{
        
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {

              this.isSuccessfllPayment = true;
               isloading.dismiss();
              this.stripeService.paymentInfo(
                {
                user:this.auth.user.id,
                name:source.owner.name,
                email:source.owner.email,
                amount:source.amount/100
              }).subscribe(e => {
              },
              error=>{
                isloading.dismiss();
                this.cardErrors = 'Your payment has succeeded, but not saved in database.Please contact to company about it!'
              }
              );

              setTimeout(()=>{
                form.reset();
                this.router.navigate(['/','main','tabs','home']); 
            
              },2000);
             
                          
             
            }
          
        }).catch(err =>{
          if (err.error) {
            isloading.dismiss();
           this.cardErrors =`Payment has not succeded.Please tyr again!`
           // Show error to your customer (e.g., insufficient funds)
           console.error(err);
         } 
        });
      },
      
      err =>{
        isloading.dismiss();
        this.cardErrors= 'Something went wrong ! ',
        console.error(err);
      });
     

    }
  }



}






