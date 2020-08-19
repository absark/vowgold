import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class SharedService {
  url = environment.url;
  user = null;
  metalRates;
  plan = null;
  constructor(
    private http:HttpClient,
    private auth:AuthService,


  ) { 
    this.user = this.auth.user;
    this.currentRates();
  }

  currentRates(){
    this.http.get<any>(`${this.url}/api/v1/users/rates`).subscribe(res=>{
      this.metalRates = res.rates;
   },
   err=>{
     this.auth.showAlert(err.error.message);
   });
  }

  updateUser(body){
    console.log("hh",body);
    return this.http.patch<{status:string,user:any}>(`${this.url}/api/v1/users/${this.auth.user.id}`,body);
  }
 
    updatePlan(body){
    return this.http.patch<any>(`${this.url}/api/v1/users/newplan/${this.auth.user.id}`,body);
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


updateRates(data){
  return this.http.patch<any>(`${this.url}/api/v1/users/rates/${this.metalRates[0]._id}`,data);
}

deleteUser(){
  return this.http.delete<{status:string,message:any}>(`${this.url}/api/v1/users/${this.auth.user.id}`);
}

}
