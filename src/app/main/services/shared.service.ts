import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class SharedService {
  url = environment.url;
  user = null;
  constructor(
    private http:HttpClient,
    private auth:AuthService,


  ) { 
    this.user = this.auth.user;
  }
  updateUser(body){
    return this.http.patch<{status:string,user:any}>(`${this.url}/api/v1/users/${this.auth.user.id}`,body);
  }

  getUser(){
   return this.http.get<{status:string,user:any}>(`${this.url}/api/v1/users/${this.auth.user.id}`);
}
getUsers(){
  return this.http.get<{status:string,users:any}>(`${this.url}/api/v1/users`);
}

updatePassword(body){
  return this.http.patch<{status:string,user:any}>(`${this.url}/api/v1/users/updatepassword`,body);
}
}
