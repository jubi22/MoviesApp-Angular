import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Casting } from '../../../shared/casting.mode';
import { MovieService } from '../../../shared/movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  casted: Casting[] = [];
  u;
  movieid;
  constructor(private service: MovieService, private activates: ActivatedRoute) { }

  ngOnInit() {
    this.u = this.activates.paramMap.subscribe(t => {
      this.movieid = t.get('id');
      console.log(this.movieid);
    });
    this.service.GetCastedMovies(this.movieid).subscribe(x=> console.log(this.casted = x as Casting[]));
  }

}
