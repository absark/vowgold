import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazorpayPageRoutingModule } from './razorpay-routing.module';

import { RazorpayPage } from './razorpay.page';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RazorpayPageRoutingModule
  ],
  declarations: [RazorpayPage,PaymentComponent],
  entryComponents:[PaymentComponent]
})
export class RazorpayPageModule {}
