import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  distributorRequests:any =[];
  constructor(
    private service:SharedService,
    private auth:AuthService,
    private loading:LoadingController,
    private toast:ToastController
    ) { }

  ngOnInit() {
   //this.distributorReqs();
  }

  // distributorReqs(){
  //   this.loading.create({
  //     message:'Loading...'
  //   }).then(el=>{el.present()});
  //   this.service.getDistributors().subscribe(res=>{
  //     this.loading.dismiss();
  //     this.distributorRequests.push(...res.data);
  //   },
  //   err=>{
  //     this.loading.dismiss();
  //     this.auth.showAlert(err.error.message);
  //   });
  // }

  // onAcceptReq(){
  //   this.service.assignAsDistributor().subscribe(res=>{
  //      this.toast.create({
  //       message:'Accepted',
  //       duration:2000
  //     }).then(el=>{
  //            el.present();
  //            this.distributorReqs();
  //     });
      
  //   },
  //   err=>{
  //     this.auth.showAlert(err.error.message);
  //   });
  // }

  // onCancelReq(){
  //   this.service.discardReq().subscribe(res=>{},
  //   err=>{this.auth.showAlert(err.error.message)})
  // }

}
