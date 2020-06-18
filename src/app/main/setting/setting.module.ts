import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SettingPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SettingPage,UpdateUserComponent,UpdatePasswordComponent],
  entryComponents:[UpdateUserComponent,UpdatePasswordComponent]
})
export class SettingPageModule {}
