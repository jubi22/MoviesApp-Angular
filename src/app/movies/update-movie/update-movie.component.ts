import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../../shared/movies.model';
import { MovieService } from '../../shared/movies.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  list: Movie[]=[];
  u;
  id;

  constructor(private service: MovieService, private mess: ToastrService, private activated: ActivatedRoute) { }

  ngOnInit() {
    this.u = this.activated.paramMap.subscribe(t => {
      this.id = t.get('id');
      const users = this.service.GetMovies();
      /*     console.log("list : ", this.list);*/
      users.subscribe(x => this.list = x as Movie[]);

    });
  }
  onSubmit(form: NgForm) {
    this.service.UpdateMovie(form.value).subscribe(
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
