import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRatesPageRoutingModule } from './update-rates-routing.module';

import { UpdateRatesPage } from './update-rates.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateRatesPageRoutingModule
  ],
  declarations: [UpdateRatesPage]
})
export class UpdateRatesPageModule {}
