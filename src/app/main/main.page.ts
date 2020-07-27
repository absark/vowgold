import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  role;

  constructor(
    private auth: AuthService
  ) {
     this.role = this.auth.userRole;
    
   }

  ngOnInit() {}
 
  
  onSignout(){
    this.auth.logout();

 }

}
