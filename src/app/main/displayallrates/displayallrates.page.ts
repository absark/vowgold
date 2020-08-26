import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-displayallrates',
  templateUrl: './displayallrates.page.html',
  styleUrls: ['./displayallrates.page.scss'],
})
export class DisplayallratesPage implements OnInit {
  rates;
  url = environment.url;

  twentyfourK:number
  twentytwoK:number;
  eighteenK:number;
  fourteenK:number;
  twelveK:number;
  nineK:number;

  constructor(private auth: AuthService,private http : HttpClient , private loading:LoadingController,) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.loading.create({message:'Please wait while loading rates!'}).then(el =>{
      el.present();
    });
    await this.http.get<any>(`${this.url}/api/v1/users/rates`).subscribe(res=>{
      this.rates = res.rates;
      this.twentyfourK = this.rates[0].gold;
      this.calculateGoldRates(this.twentyfourK);
      this.loading.dismiss();
   },
   async err=>{
    await this.loading.dismiss();
     this.auth.showAlert('Error While Fetching Rates!');
   });
  }

  calculateGoldRates(twentyfourcarret:number) {
    this.twentytwoK = Math.round((twentyfourcarret/100) * 96.5);
    this.eighteenK = Math.round((twentyfourcarret/100) * 80.5);
    this.fourteenK = Math.round((twentyfourcarret/100) * 65);
    this.twelveK = Math.round((twentyfourcarret/100) * 52);
    this.nineK = Math.round((twentyfourcarret/100) * 42);
  }

}
