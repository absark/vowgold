import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../../services/shared.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {
  url = environment.url;
  // Data passed in by componentProps
  @Input() name: string;
  @Input() email: string;
  @Input() mobile: number ;
  @Input() address: string;
  @Input() pancard: string ;
  @Input() adhaarcard: number ;
  updateUser:FormGroup;
  panCard_selected;
  adhaarCard_selected;
  submitted = false;
  constructor(
    private modal:ModalController,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private service: SharedService
    ) { }

  ngOnInit() {
    this.updateUser = this.formBuilder.group({
      name:[this.name,[Validators.required]],
      email:[this.email, [Validators.required,Validators.email]],
      mobile:[this.mobile,[Validators.required,Validators.pattern(/^\d{10}$/)]],
      address:[this.address,[Validators.required]],
      panCard:[this.pancard,[Validators.required]],
      adhaar:[this.adhaarcard,[Validators.required]]
    }
    );
  }
  onSubmit(form:FormGroup){
    this.submitted = true;
    if (this.updateUser.invalid) return;
    const userData = new FormData();
    if(typeof(this.updateUser.get('panCard').value) === 'object' || typeof(this.updateUser.get('adhaar').value)==='object'){
    userData.append("name",this.updateUser.value.name);
    userData.append("email",this.updateUser.value.email);
    userData.append("password", this.updateUser.value.password);
    userData.append("passwordConfirm", this.updateUser.value.passwordConfirm);
    userData.append("mobile", this.updateUser.value.mobile);
    userData.append("address", this.updateUser.value.address);
    userData.append("panCard", this.updateUser.value.panCard);
    userData.append("adhaar", this.updateUser.value.adhaar);
    this.service.updateUser(userData)
      .subscribe(res=>{
      this.modal.dismiss(res.user);
      },
      err=>{
        this.auth.showAlert(err.error.message);
      });
    } else{
      this.service.updateUser(this.updateUser.value)
      .subscribe(res=>{
      this.modal.dismiss(res.user);
      },
      err=>{
        this.auth.showAlert(err.error.message);
      });
    }

   
}

getPancard(event:Event){
  const file = (event.target as HTMLInputElement).files[0];
  this.panCard_selected = file;
  this.updateUser.patchValue({panCard:file});

}
getAdhaar(event:Event){
  const file = (event.target as HTMLInputElement).files[0];
  this.adhaarCard_selected = file;
  this.updateUser.patchValue({adhaar:file});

}

  onDismiss(){
    this.modal.dismiss();
  }

}
