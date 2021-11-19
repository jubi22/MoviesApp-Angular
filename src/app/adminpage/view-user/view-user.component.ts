import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Casting } from '../../shared/casting.mode';
import { Movie } from '../../shared/movies.model';
import { MovieService } from '../../shared/movies.service';
import { User } from '../../shared/register.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  list: User[] = [];
  movie: Movie[] = [];
  casted: Casting[] = [];
  u;
  id;
  constructor(public service: UserService, public movieservice: MovieService,
    public activated: ActivatedRoute, public router: Router, private mess: ToastrService) { }

  ngOnInit() {
    /*      this.service.GetUsers().subscribe(x => this.list = x as User[]);*/
    this.u = this.activated.paramMap.subscribe( t => {
      this.id = t.get('id');
      const users =  this.service.GetUsersId();
      /*     console.log("list : ", this.list);*/
      users.subscribe(x => this.list = x as User[]);
      
    });
    this.movieservice.GetCastedMovies(this.id).subscribe(t => console.log(this.casted = t as Casting[]));
    this.movieservice.GetMovies().subscribe(t => this.movie = t as Movie[]);
  }
  onSubmit(form: NgForm) {
    this.movieservice.AddCasting(form.value).subscribe(t => {
      this.mess.success("Casted Successfully!");
      this.router.navigateByUrl("/admin");
    },
      err => {
        this.mess.error("Error")
      }
    );
  }
}
