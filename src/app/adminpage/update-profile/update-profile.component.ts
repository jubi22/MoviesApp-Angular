import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/register.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  list: User[] = [];
  u;
  id;
  constructor(private service: UserService, private mess: ToastrService, private activated: ActivatedRoute) { }

  ngOnInit() {
    this.u = this.activated.paramMap.subscribe(t => {
      this.id = t.get('id');

      const users = this.service.GetUsersId();
      /*     console.log("list : ", this.list);*/
      users.subscribe(x => this.list = x as User[]);

    });
  }
  onSubmit(form: NgForm) {
    this.service.UpdateUser(form.value).subscribe(
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
