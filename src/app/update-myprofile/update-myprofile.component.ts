import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-update-myprofile',
  templateUrl: './update-myprofile.component.html',
  styleUrls: ['./update-myprofile.component.css']
})
export class UpdateMyprofileComponent implements OnInit {
  id: string;

  constructor(private service: UserService, private mess: ToastrService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
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
