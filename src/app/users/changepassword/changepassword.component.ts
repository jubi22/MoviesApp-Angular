import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  id: string;
  constructor(private service: UserService, private mess: ToastrService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
  }
  onSubmit(form: NgForm) {

    if (form.value.NewPassword != form.value.ConfirmNewPassword) {
      this.mess.error("New Passwords are not matching!");
    }
    else {
      if (form.value.CurrentPassword == form.value.NewPassword) {
        this.mess.error("New password and old password cannot be same!");
      }
      else {
        this.service.ChangePassword(form.value).subscribe(
          res => {
            if (res != null) {
              form.reset();
              console.log("Success");
              this.mess.success("Updated successful!");
            }

          },
          err => {
            form.reset();
            console.log(" Some Error has occured", err);
            this.mess.error("Failed to update!");
          }
        );
      }

    }
  }
}
