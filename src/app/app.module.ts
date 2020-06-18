import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Storage , IonicStorageModule } from '@ionic/storage';
import { JwtModule , JWT_OPTIONS} from "@auth0/angular-jwt";
import { ConfigInterceptor } from './main/services/auth-interceptor';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
export function jwtOptionsFactoty(storage){
  return {
    tokenGetter:()=>{
       return storage.get('access_token')
    },
    whiteListedDomains:['localhost:5000']
  };
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
    jwtOptionsProvider:{
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactoty,
      deps:[Storage]
      }
    })
    
  ],
  providers: [   
    
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConfigInterceptor,
      multi: true
    },
    FileTransfer
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
