
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Casting } from './casting.mode';
import { Movie } from './movies.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }
  GetMovies() {
    return this.http.get(environment.apiUrl +'/getmovies');
  }

  DeleteMovie(id: number) {
    return this.http.delete(environment.apiUrl + '/delete-movie/' + id, { responseType:'text' });
  }
  AddMovies(movie: Movie) {
    return this.http.post(environment.apiUrl + '/addmovie', movie);
  }

  refreshPage() {
    return this.http.get(environment.apiUrl + '/getmovies').toPromise();
  }

  refreshCasted(Id: string) {
    return this.http.get(environment.apiUrl + '/cast-actor/' + Id);
  }
  GetCastedMovies(Id: string) {
    return this.http.get(environment.apiUrl + '/cast-actor/' + Id);
  }

  AddCasting(cast: Casting) {
    return this.http.post(environment.apiUrl + '/castmovie', cast);
  }

  GetCastedActors(Id: string) {
    return this.http.get(environment.apiUrl + '/moviedetail/' + Id);
  }
  UpdateMovie(movie: Movie) {
    return this.http.put(environment.apiUrl + '/update-movie', movie);
  }
}
