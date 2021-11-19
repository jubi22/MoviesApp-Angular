import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../../shared/movies.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  constructor(private service: MovieService, private mess: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.service.AddMovies(form.value).subscribe(
      res => {
        if (res != null) {
          form.reset();
          console.log("Success");
          this.mess.success("Movie added successful!");
        }

      },
      err => {
        form.reset();
        console.log(" Some Error has occured",err);
        this.mess.error("Failed to add movie!");
      }
    );


  }
}
