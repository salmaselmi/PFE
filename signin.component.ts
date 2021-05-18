import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/components/user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   public signinForm: FormGroup;
  public passwordForm: FormGroup;
  

  constructor(builder: FormBuilder, private http: HttpClient, private router: Router) {

    let signinControls = {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    }


    let passwordControls = {
      emailpassword: new FormControl("", [
        Validators.required,
        Validators.email
      ])
    }


    this.signinForm = builder.group(signinControls)
    this.passwordForm = builder.group(passwordControls)
  }


  get email() { return this.signinForm.get('email') }
  get password() { return this.signinForm.get('password') }


  get emailpassword() { return this.passwordForm.get('emailpassword') }

  ngOnInit(): void {
    //   let token = localStorage.getItem("mytoken")
    //   if (token) {
    //  this.router.navigateByUrl('/dashbord')
    // }
  }

  signinUser() {
    console.log(this.signinForm.value);
    this.http
      .post<any>("http://localhost:3001/user/signin", this.signinForm.value)
      .subscribe(
        (result) => {

          let token = result.token
          localStorage.setItem("mytoken", token)
          this.router.navigateByUrl('/dashboard')
        },  //l'execution mte3ha tsiir automatiquement en cas de succés
        (error) => {
          console.log(error);
        }
      )
  }

  passwordUser() {
    console.log(this.passwordForm.value);
  }

}


