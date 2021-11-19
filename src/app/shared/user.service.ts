import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from './login.model';
import { User } from './register.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public name: string = localStorage.getItem('username');
  private UserName = new BehaviorSubject<string>(localStorage.getItem('username'));
 

  list: User[];
  constructor(public http: HttpClient, private router: Router) {
  }
  AddUser(user: User) {
    return this.http.post(environment.apiUrl + '/register', user);
  }

  onLogin(user: Login) {

    return this.http.post(environment.apiUrl + '/login', user);
  }

  GetUserDetail() {
    /*localStorage.setItem('name', 'jubi');*/
    var tokenheader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    this.loginStatus.next(true);
    this.UserName.next(localStorage.getItem('username'))
    return this.http.get(environment.apiUrl + '/userdetail', { headers: tokenheader });
  }
  Logout() {
    this.loginStatus.next(false);
    console.log("logout success");
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    this.router.navigateByUrl('/user/login');
  }

  LoginStatus(): boolean
  {
    if (localStorage.getItem('token') != null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
    
  checkLoginStatus(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }

  get isLoggesIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }


  //isLogin()
  //{
  //  return this.status.asObservable();
  //}

  RoleAuth(roles): boolean{
    var matching = false;
    var payload = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payload.role;
    roles.forEach(t => {
      if (userRole == t) {
        matching = true;
        return false;
      }
    });
    return matching;
  }

  GetUsers() {
    return this.http.get(environment.apiUrl + '/getusers');
  }
  GetUsersId() {
    return this.http.get(environment.apiUrl + '/getusers');
  }
  DeleteUser(Id: string) {
    return this.http.delete(environment.apiUrl + '/delete/' + Id);
    //console.log("Deleted");
    //this.router.navigateByUrl("/home");
  }
  refresh() {
    return this.http.get(environment.apiUrl + '/getusers').toPromise();
  }
  UpdateUser(user: User) {
    return this.http.put(environment.apiUrl + '/update', user);
  }
  ChangePassword(user: User) {
    return this.http.put(environment.apiUrl + '/changepwd', user);
  }

}
