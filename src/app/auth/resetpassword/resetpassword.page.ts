import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MustMatch } from '../../services/helper';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  resetPassword:FormGroup;
  submitted = false;
  msg:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private auth:AuthService,
    private loader:LoadingController,
    private router:Router
    ) { }

  ngOnInit() {
    this.resetPassword = this.formBuilder.group({
      token:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      passwordConfirm:['',[Validators.required]]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
  });
  }


  onSubmit(form:FormGroup){
    this.submitted = true;
    this.loader.create({message:'Sending...'}).then(el =>{
      el.present();
    });
    // stop here if form is invalid
    if (this.resetPassword.invalid) {
        return;
    }
    this.auth.resetPassword( this.resetPassword.get('token').value,
    {
      password:this.resetPassword.get('password').value,
      passwordConfirm:this.resetPassword.get('passwordConfirm').value
    }).subscribe(res =>{
     this.loader.dismiss();
     this.msg = true;
     setTimeout(()=>{
      this.router.navigate(['/','auth','signin']);
      this.resetPassword.reset();
    },2500);
    },
    err=>{
      this.loader.dismiss();
      this.auth.showAlert(err.message);
    });
}
}
