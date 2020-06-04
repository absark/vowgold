import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
  
    this.auth.login(form.value).subscribe(res => {
      const result = res as any;
      this.auth.userInfo = result.user;
      console.log("respononse",result.user);
    })
  }
}
