import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { StripeService } from '../services/stripe.service';
import { Router } from '@angular/router';
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
  cardErrors
  confirmation;
  constructor(
    private router: Router,
    private auth:AuthService,
    private loading:LoadingController,
    private stripeService:StripeService
     ) {
       this.auth.getUser();
      }

      ionViewWillEnter(){
       if(this.auth.user){
        this.auth.getUser().subscribe(res => {
          const result = res as any;
          this.email = result.user.email;
        })
       }
      }


  ionViewDidEnter() {
    this.stripe = Stripe('pk_test_zLINm8sE20mRIhoGbJZxQ6hG00vCgXcRUF');
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



  async handleForm(form:NgForm) {
     // loading start
   let isloading =  await this.loading.create({message:'Processing...'});
   await isloading.present();
   if(this.email===undefined || this.amount === undefined){
       this.cardErrors= 'Please enter required Fields!';
       await isloading.dismiss();
       return;
   }
   if(this.email===undefined || this.amount === undefined){
    this.cardErrors= 'Please enter required Fields!';
    await isloading.dismiss();
    return;
}
if( this.amount!== 1000 || this.amount<1000){
  this.cardErrors= 'Amount must be greater then or equal to 1000';
  await isloading.dismiss();
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
      await isloading.dismiss();
      // Inform the customer that there was an error.
      this.cardErrors = error.message;
    } 
    else {

      // Send the token to your server.
      console.log('sending token',source);
     await this.stripeService.payment(source).subscribe(e=>{
        this.confirmation = e as any;
     

       // CONFIRM THE PAYMENT
        this.stripe.confirmCardPayment(this.confirmation.paymentObj.client_secret, {
          payment_method: {
            card: this.card
          }
        }).then(result=>{
          if (result.error) {
             isloading.dismiss();
            this.auth.showAlert(result.error.message);
            // Show error to your customer (e.g., insufficient funds)
            console.log('Payment Error', result.error.message);
          } 
          else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              console.log('INFO',this.auth.user.id);
               isloading.dismiss();
              this.stripeService.paymentInfo(
                {
                user:this.auth.user.id,
                name:source.owner.name,
                email:source.owner.email,
                amount:source.amount/100
              }).subscribe(e => {
                console.log(e);
              },
              error=>{
                this.auth.showAlert(error.message);
              }
              );
              form.reset();
              this.router.navigate(['/','home']);                         
             
            }
          }
        });
      });
     

    }
  }



}






