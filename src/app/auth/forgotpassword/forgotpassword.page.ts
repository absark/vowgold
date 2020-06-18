import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotPassword:FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth:AuthService,
    private loader:LoadingController,
    private router:Router
    ) { }

  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]]
    })
  }


  onSubmit(form:FormGroup){
    this.submitted = true;
    this.loader.create({message:'Sending...'}).then(el =>{
      el.present();
    });
    // stop here if form is invalid
    if (this.forgotPassword.invalid) {
        return;
    }
    this.auth.forgotPassword(this.forgotPassword.value).subscribe(res =>{
     this.loader.dismiss();
     this.router.navigate(['/','auth','resetpassword']);
     this.forgotPassword.reset();
    },
    err =>{
      this.loader.dismiss();
      this.auth.showAlert(err.message);
    });
}
}
