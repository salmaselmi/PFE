import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService }  from 'src/app/Services/user.service'; 
import { User } from 'src/app/components/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public userAddForm: FormGroup;
  
 /*  public userForm: FormGroup;
  fonc:string; */

 
  constructor(builder: FormBuilder , private router: Router, private userService:UserService, private toastr: ToastrService) {

    let userAddControls = {
      nom: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[A-Z][a-z 'éç]+")
    ]),

      prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),

      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ]),

      phone: new FormControl("", [
         
      ]) ,

      fonctionnalite: new FormControl("", [
        Validators.required
      ]) 
 

    }
   /*  let userControls ={
   
      fonctionnalite: new FormControl("", [
        Validators.required
      ]) 

     } */

    this.userAddForm = builder.group(userAddControls)
/*     this.userForm = builder.group(userControls)
 */
  }
  get nom() { return this.userAddForm.get('nom') }
  get prenom() { return this.userAddForm.get('prenom') }
  get email() { return this.userAddForm.get('email') }
  get password() { return this.userAddForm.get('password') }
  get phone() { return this.userAddForm.get('phone') }
/*   get fonctionnalite() { return this.userForm.get('fonctionnalite')}
 */
  get fonctionnalite() { return this.userAddForm.get('fonctionnalite')} 


  ngOnInit(): void {
  }


 
  userUser() {  
    
    let data = this.userAddForm.value;
    let user = new User(data.nom,data.prenom,data.email,data.password,data.phone,data.date,data.fonctionnalite/* this.fonc */);
    console.log(user);

     this.userService.addUser(user).subscribe(
       res => {
        this.toastr.success(res.message);
 
         this.router.navigate(['/user/param']);
       },
       error => {
         console.log(error);
       }
     )
     // let project = data
 

  }
/*   UserPop(){
    console.log("test");
    this.fonc=this.userForm.value.fonctionnalite;
    document.getElementById("closeModalButton").click();
  }
 */
  
}
