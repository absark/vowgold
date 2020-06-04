import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../services/helper';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {
   registerForm:FormGroup;
   submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private auth:AuthService
    ) { }

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['', [Validators.required,Validators.email]],
      mobile:['', [Validators.required,Validators.pattern(/^\d{10}$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      passwordConfirm:['',[Validators.required]]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
  }
    );
  }
  

  

  onSubmit(form:FormGroup){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    console.log("submit", JSON.stringify(this.registerForm.value))
    this.auth.register(this.registerForm.value).subscribe(res=>{
      console.log("submit",JSON.stringify(res))
    })
}

  }

