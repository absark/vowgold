import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {
  // Data passed in by componentProps
  @Input() name: string;
  @Input() email: string;
  @Input() mobile: number ;

  updateUser:FormGroup;
  submitted = false;
  constructor(
    private modal:ModalController,
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.updateUser = this.formBuilder.group({
      name:[this.name,[Validators.required]],
      email:[this.email, [Validators.required,Validators.email]],
      mobile:[this.mobile,[Validators.required,Validators.pattern(/^\d{10}$/)]]
    }
    );
  }
 async onSubmit(form:FormGroup){
    this.submitted = true;
   console.log(this.updateUser.value);
    // stop here if form is invalid
    if (this.updateUser.invalid) {
        return;
    }
    this.auth.udateUser(this.updateUser.value).subscribe(res=>{
      
      const result = res as any;
      this.auth.userInfo = result.user;
      this.modal.dismiss(result.user);
    },
    err=>{
      this.auth.showAlert(err.message);
    });
}

  onDismiss(){
    this.modal.dismiss();
  }
}
