import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyaccountPageRoutingModule } from './myaccount-routing.module';

import { MyaccountPage } from './myaccount.page';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MyaccountPageRoutingModule
  ],
  declarations: [MyaccountPage,UpdateUserComponent,UpdatePasswordComponent],
  entryComponents:[UpdateUserComponent,UpdatePasswordComponent]
})
export class MyaccountPageModule {}
