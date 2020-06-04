import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../../app/services/auth.service';
import { MustMatch } from '../../services/helper';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html'
})
export class UpdatePasswordComponent implements OnInit {
  updated = false;
  updatePassword:FormGroup;
  submitted = false;
  constructor(
    private modal:ModalController,
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.updatePassword = this.formBuilder.group({
      currentPassword:[null,[Validators.required,Validators.minLength(6)]],
      password:[null, [Validators.required,Validators.minLength(6)]],
      passwordConfirm:[null,[Validators.required]]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
  }
    );
  }
 async onSubmit(form:FormGroup){
    this.submitted = true;
   console.log(this.updatePassword.value);
    // stop here if form is invalid
    if (this.updatePassword.invalid) {
        return;
    }
    this.auth.updatePassword(this.updatePassword.value).subscribe(async res=>{
      this.updated = true;
     
    },
    err=>{
      this.auth.showAlert(err.message);
    });
}
}