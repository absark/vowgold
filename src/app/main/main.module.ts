import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigInterceptor } from './services/auth-interceptor';
import { SharedService } from './services/shared.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage],
  providers:[
    SharedService,
  
  ]
})
export class MainPageModule {}
