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
const TOKEN_KEY = 'access_token';

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  token;
  constructor(private storage:Storage) { 
    
    this.storage.get(TOKEN_KEY).then(t =>{
      console.log("Token",t);
      this.token = t;
    });
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = this.token;
console.log("after",token);
    //Authentication by setting header with token value
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': "Bearer " + token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }


}