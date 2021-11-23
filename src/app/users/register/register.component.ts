
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public service: UserService, private mess: ToastrService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (form.value.Password != form.value.ConfirmPassword) {
      this.mess.error("Passwords are not matching!");
    }
    else {
      this.service.AddUser(form.value).subscribe(
        res => {
          if (res != null) {
            form.reset();
            console.log("Success");
            this.mess.success("User registration successful!");
          }

        },
        err => {
          form.reset();
          console.log(" Some Error has occured");
          this.mess.error("Failed to add user!");
        }
      );
    }
  }
}
