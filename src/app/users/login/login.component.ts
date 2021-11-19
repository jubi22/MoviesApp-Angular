import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, public mess: ToastrService, public route: Router) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.service.onLogin(form.value).subscribe(
      (res:any) => {

        if (res != null) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('username', res.username);
          //console.log("token: ", res.token);
          this.mess.success("Login successful!");
          this.route.navigateByUrl('/login-page');
        }

      },
      err => {
        
        console.log(" Some Error has occured");
        this.mess.error("Login failed!!");
      }
    );
    form.reset();
  }
}
