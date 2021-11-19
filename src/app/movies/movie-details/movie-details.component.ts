import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../../shared/movies.model';
import { MovieService } from '../../shared/movies.service';
import { User } from '../../shared/register.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  list: Movie[];
  casted: User[];
  users: User[];
  u;
  id;
  constructor(public service: MovieService, public activated: ActivatedRoute,
    private usersservice: UserService, private router: Router, private mess: ToastrService) { }

  ngOnInit() {
    this.u = this.activated.paramMap.subscribe(t => {
      this.id = t.get('id');
      this.id = Number( this.id);
      const users = this.service.GetMovies();
      /*     console.log("list : ", this.list);*/
      users.subscribe(x => this.list = x as Movie[]);

    });

    this.service.GetCastedActors(this.id).subscribe(t => this.casted = t as User[]);
    this.usersservice.GetUsers().subscribe(t => this.users = t as User[]);
  }
  onSubmit(form: NgForm) {
    this.service.AddCasting(form.value).subscribe(t => {
      this.mess.success("Casted Successfully!");
      this.router.navigateByUrl("/movies");
    },
      err => {
        this.mess.error("Error");
      }
    );
  }
}
