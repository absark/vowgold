import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../services/helper';
import { AuthService } from 'src/app/services/auth.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
const TOKEN_KEY = 'access_token';
const USER_ROLE = 'access_role';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {
   registerForm:FormGroup;
   submitted = false;
   selectedFile: any;
   pancard:any = null;
   adhaarcard:any = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private auth:AuthService,
    private http: HttpClient,
    private storage:Storage,
    private helper: JwtHelperService,
    private loading:LoadingController
    ) { }

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['', [Validators.required,Validators.email]],
      mobile:['', [Validators.required,Validators.pattern(/^\d{10}$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      passwordConfirm:['',[Validators.required]],
      address:['',[Validators.required]],
      panCard:['',[Validators.required]],
      adhaar:['',[Validators.required]]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
  }
    );
  }
  

  

  onSubmit(form:FormGroup){
    this.submitted = true;
    this.loading.create({message:'SignUp...'}).then(el =>{
        el.present();
      });
    const userData = new FormData();
    userData.append("name",this.registerForm.value.name);
    userData.append("email",this.registerForm.value.email);
    userData.append("password", this.registerForm.value.password);
    userData.append("passwordConfirm", this.registerForm.value.passwordConfirm);
    userData.append("mobile", this.registerForm.value.mobile);
    userData.append("address", this.registerForm.value.address);
    userData.append("panCard", this.registerForm.value.panCard);
    userData.append("adhaar", this.registerForm.value.adhaar);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.loading.dismiss();
        return;
    }
 
      this.http.post<any>(`${this.auth.url}/api/v1/users/signup`, userData).subscribe(res =>{
        this.loading.dismiss();
        this.auth.token = res.token;
        this.auth.userRole = res.user.role;
        this.storage.set(TOKEN_KEY, res.token);
        this.storage.set(USER_ROLE, res.user);
        this.auth.user = this.helper.decodeToken(res['token']);
        this.auth.authenticationState.next(true);
        this.adhaarcard = null;
        this.pancard = null;
        this.registerForm.reset();
      },err=>{
        this.loading.dismiss();
        this.auth.showAlert(err.error.message);
        throw new Error(JSON.stringify(err));
        
      });
}


onFileChanged(event:Event){
  const file = (event.target as HTMLInputElement).files[0];
  this.pancard = file;
  this.registerForm.patchValue({panCard:file});
  this.registerForm.get('panCard').updateValueAndValidity();

}

onAdhaar(event:Event){

  const file = (event.target as HTMLInputElement).files[0];
  this.adhaarcard = file;
  this.registerForm.patchValue({adhaar:file});
  this.registerForm.get('adhaar').updateValueAndValidity();
  
}



}

  

