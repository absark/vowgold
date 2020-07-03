import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { MustMatch } from '../../../services/helper';
import { Storage } from '@ionic/storage';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html'
})
export class UpdatePasswordComponent implements OnInit {
  updated = false ;
  updatePassword:FormGroup;
  submitted = false;
  constructor(
    private auth: AuthService,
    private modal:ModalController,
    private formBuilder: FormBuilder,
    private service: SharedService,
    private storage:Storage
    ) { 
     
    }

  ngOnInit() {
    this.updatePassword = this.formBuilder.group({
      passwordCurrent:[null,[Validators.required,Validators.minLength(6)]],
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
    this.service.updatePassword(this.updatePassword.value).subscribe(async res=>{
      this.storage.remove('access_token');
      this.updated = true;
       setTimeout(()=>{
        this.updated = false;
        this.auth.logout();
       this.modal.dismiss();
       
       },2000);
       
    },
    err=>{
      this.auth.showAlert(err.error.message);
    });
    
}

onDismiss(){
  this.modal.dismiss();
}
}