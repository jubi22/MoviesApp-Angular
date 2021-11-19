import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  userdetail;

  constructor(private router: Router, public service: UserService) { }

  ngOnInit() {
    this.service.GetUserDetail().subscribe(
      t => {
        this.userdetail = t;
      }
    );
  }
}
