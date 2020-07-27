//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  token;
  mySubscription: any;
  constructor(
    private storage:Storage,
    private platform:Platform,
    private router:Router,
    private auth: AuthService
    ) { 
   
console.log("From Interceptor!",this.token);
  }




  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = this.auth.getToken();
    //Authentication by setting header with token value
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': "Bearer " + token
        }
      });
    }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'content-type': 'application/json'
    //     }
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set('Accept', 'application/json')
    // });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>');
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }

   
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}