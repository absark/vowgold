import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';
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
  @Input() panCard: string;
  @Input() adhaar: string;
  updateUser:FormGroup;
  submitted = false;
  constructor(
    private modal:ModalController,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private service: SharedService,
    private http:HttpClient
    ) { }

  ngOnInit() {
    this.updateUser = this.formBuilder.group({
      name:[this.name,[Validators.required]],
      email:[this.email, [Validators.required,Validators.email]],
      mobile:[this.mobile,[Validators.required,Validators.pattern(/^\d{10}$/)]],
      address:[this.address,[Validators.required]]
    }
    );
  }
 async onSubmit(form:FormGroup){
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateUser.invalid) {
        return;
    }
    this.service.updateUser(this.updateUser.value)
    .subscribe(res=>{
      console.log(res);
      this.modal.dismiss(res.user);
    },
    err=>{
      this.auth.showAlert(err.message);
    });
}

  onDismiss(){
    this.modal.dismiss();
  }

}
