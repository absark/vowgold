import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-rates',
  templateUrl: './update-rates.page.html',
  styleUrls: ['./update-rates.page.scss'],
})
export class UpdateRatesPage implements OnInit {
 updateRates:FormGroup;
 gold:number;
 silver:number;
 diamond:number= null;
 isUpdated = false;
  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private auth:AuthService,
    private service:SharedService,
    private router:Router
    ) { }

  ngOnInit() {
    this.updateRates = this.formBuilder.group({
      gold:[this.gold,Validators.required],
      silver:[this.silver,Validators.required],
      diamond:this.diamond
    });
     
  }

  onCurrentRates(){
    this.http.get<any>(`https://metals-api.com/api/latest?access_key=fka1uuew9hibte9d5xerfhyndxl5ts4iohiwa9nv7wj9k2n5pt7hmiv1rfc4&base=INR&symbols=XAU,XAG`)
    .subscribe(res=>{
     this.gold = Math.round(res.rates.XAU/28.3495);
     this.silver = Math.round(res.rates.XAG/28.3495); 
      this.ngOnInit();
    },
    err=>{
      this.auth.showAlert(err.error.info);
    });
  }

  onSubmit(){
    if (this.updateRates.invalid) return;
    this.service.updateRates(this.updateRates.value).subscribe(res=>{
      this.isUpdated = true;
      setTimeout(()=>{
        this.isUpdated = false,
        this.router.navigate(['/','main','tabs','home']);
      },1500);
    },
    err=>{
      this.auth.showAlert(err.error.message);
    });
  }

}
