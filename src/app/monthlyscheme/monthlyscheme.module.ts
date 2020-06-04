import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyschemePageRoutingModule } from './monthlyscheme-routing.module';

import { MonthlyschemePage } from './monthlyscheme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyschemePageRoutingModule
  ],
  declarations: [MonthlyschemePage]
})
export class MonthlyschemePageModule {}
