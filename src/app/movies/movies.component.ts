import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../shared/movies.model';
import { MovieService } from '../shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
 public list: Movie[];
  u;
  id;
  admin: string;
  constructor(public service: MovieService, private activated: ActivatedRoute, private mess: ToastrService) { }

  ngOnInit() {
    this.admin = localStorage.getItem('username');
    this.service.GetMovies().subscribe(res => this.list = res as Movie[]);
    
  }
  onDelete(id: number) {
    if (confirm("Are you sure to delete this movie?")) {
      this.service.DeleteMovie(id).subscribe(t => {
        this.service.refresh().then(t => this.list = t as Movie[]);
        console.log("succes deleted", t);
        this.mess.error("Deleted Successfully");
      },
        err => { console.log("error deleteing", err) }
      )
    }
  }
}
