import { Component, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  LoginStatus: Observable<boolean>;
  id: string;
  UserName: Observable<string>;
  name;
/*  UserName$: Observable<string>;*/
  constructor(private ser: UserService) { }
  ngOnInit() {
    /*    this.status = this.ser.LoginStatus();*/
 
    /*return this.name=this.ser.name;*/
    this.name = localStorage.getItem('username');
    /*console.log(this.name);*/
    this.LoginStatus = this.ser.isLoggesIn;

    this.UserName = this.ser.currentUserName;
    this.id = localStorage.getItem('id');

  }
  Logout() {
     this.ser.Logout();
  }

  isLog() {
    return  this.ser.LoginStatus();
  }
}
