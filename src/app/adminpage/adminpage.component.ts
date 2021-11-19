import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/register.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  list: User[];
  id: string;
  constructor(public service: UserService, public router: Router, private mess: ToastrService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.service.GetUsers().subscribe(t => this.list = t as User[]);
  }
  onDelete(id: string) {
    if (confirm("Are you sure to delete this user?")) {
      this.service.DeleteUser(id).subscribe(t => {
        this.service.refresh().then(t => this.list = t as User[]);
        console.log("succes deleted",t);
        this.mess.error("Deleted Successfully");
      },
        err => { console.log("error deleteing",err) }
      )
    }
  }
}
