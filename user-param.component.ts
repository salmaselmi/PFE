import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-param',
  templateUrl: './user-param.component.html',
  styleUrls: ['./user-param.component.css'],

})
export class UserParamComponent implements OnInit {
 
  public users: any [] = [];
  userParam : any[]=[]; 
  userDelete;

  constructor(private userService:UserService) {
   }
  ngOnInit(): void {
    this.getAllUsers();
  }

  deleteRow(event) {
    this.userDelete = event;
  } 

  delete(){
    let index = this.userParam.indexOf(this.userDelete);
    this.userParam.splice(index,1);
    this.userService.deleteUser(this.userDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

  getAllUsers(){
    this.userParam=[];

    this.userService.getAllUsers().subscribe(
      result =>{
        this.userParam=result;
        this.users = result;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.userParam=[];
      this.userParam = this.users.filter((ct) => { 
        return ct.nom.toLowerCase().includes(value.toLowerCase())
        })
    } else{
      this.userParam=[];
      this.userParam=this.users;
    }
    
  }

/*   ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result =>{
        this.userParam = result
      },
      error =>{
        console.log(error);
      }
    )
  }

  deleteRow(event) {
    this.userDelete = event;
  } 
   delete(){
  let index = this.userParam.indexOf(this.userDelete);
  this.userParam.splice(index,1);
  this.userService.deleteUser(this.userDelete._id).subscribe(
   res => {
     console.log(res);
   },
   err => {
     console.log(err);
   }

 )
 document.getElementById("closeModalButton").click();
} */
}
