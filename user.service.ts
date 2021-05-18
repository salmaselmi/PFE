import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUserUrl = "http://localhost:3001/user/add";
  private getOneUserUrl = "http://localhost:3001/user/one/"
  private updateUserUrl = "http://localhost:3001/user/update-info/"
  private deleteUserUrl ="http://localhost:3001/user/remove/"
  
  private signinUrl="http://localhost:3001/user/signin"
  
  constructor(private http: HttpClient) { } //http howa object ml HttpClient
 
  getAllUsers() {
    let data = this.http.get<any>("http://localhost:3001/user/all")
    return data;
  }

  getOneUser(id:string) {
    return this.http.get<any>(this.getOneUserUrl+id);
    }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user: User , id:string) {
    return this.http.put<any>(this.updateUserUrl+id, user);
  } 
  
  deleteUser(id:String){
    return this.http.delete<any>(this.deleteUserUrl+id)
  }

  //login

  signinAdmin(user:User){
    return this.http.post<any>(this.signinUrl, user);
  }


}