import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayallratesPageRoutingModule } from './displayallrates-routing.module';

import { DisplayallratesPage } from './displayallrates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayallratesPageRoutingModule
  ],
  declarations: [DisplayallratesPage]
})
export class DisplayallratesPageModule {}
