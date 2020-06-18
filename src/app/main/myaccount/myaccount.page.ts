import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  user = null;
  file =null;
  file1 =null;
  constructor(
    private auth: AuthService,
    private service:SharedService
  ) { }

  ngOnInit() {
    
  }
  
  ionViewWillEnter(){
    if(this.service.user){
      this.service.getUser().subscribe(res => {
        console.log(res.user);
        this.user = res.user;
      },
      err=>{
        this.auth.showAlert(err.message);
      }
      )
     }
  }

  onFile(event:Event){
    this.file = (event.target as HTMLInputElement).files[0];   
 }

 onUpload(){
   const userData = new FormData();
  if(this.file) userData.append("panCard",this.file);
  if(this.file1) userData.append("adhaar", this.file1);
  
   this.service.updateUser(userData).subscribe(res =>{
     console.log(res);
   },
   err=>{
     console.log(err);
   });
 }

 
 onFile1(event:Event){
  this.file1 = (event.target as HTMLInputElement).files[0];   
}


}
