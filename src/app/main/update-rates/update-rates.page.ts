import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-update-rates',
  templateUrl: './update-rates.page.html',
  styleUrls: ['./update-rates.page.scss'],
})
export class UpdateRatesPage implements OnInit {
 updateRates:FormGroup;
 ApiGoldRate:number;
 ApiSilverRate:number;
 goldRate1:number;
 goldRate2:number;
 goldRatetwentyFourCarret:number;
 silverRate1:number;
 silverRate2:number
 silverRateFinal:number
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
      debugger;
      // GETTING GOLD RATE FROM API AND SAVING IT TO VAR
      this.ApiGoldRate = Math.round(res.rates.XAU);
      this.ApiSilverRate = Math.round(res.rates.XAG);

      // CALCULATING GOLD RATE AND GETTING FINAL RATE FOR 24 CARRET
      this.goldRate1 = Math.round((this.ApiGoldRate * 10)/31.103); // RATE OF GOLD IN INR (10 GRAMS)
      this.goldRate2 = Math.round(this.goldRate1 + (this.goldRate1 * 0.14)); // RATE WITH 14% CUSTOM DUTY
      this.goldRatetwentyFourCarret = Math.round(this.goldRate2 + (this.goldRate2 * 0.03)); // RATE WITH 3% PREMIUM

      //CALCULATING SILVER RATE AND GETTING FINAL RATE FOR SILVER
      this.silverRate1 = Math.round((this.ApiSilverRate * 1000)/31.103); //RATE OF SILVER WITH INR (1000 GRAMS)
      this.silverRate2 = Math.round(this.silverRate1 + (this.silverRate1 * 0.14)); //RATE WITH 14% CUSTOM DUTY
      this.silverRateFinal = Math.round(this.silverRate2 + (this.silverRate2 * 0.03)); // RATE WITH 3% PREMIUM


     // SAVING FINAL GOLD & SILVER RATES
     this.gold = Math.round(this.goldRatetwentyFourCarret);
     this.silver = Math.round(this.silverRateFinal);

     console.log('rates' , this.updateRates.value);
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
