import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoginHomeComponent } from './users/login/login-home/login-home.component';
import { UserService } from './shared/user.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateProfileComponent } from './adminpage/update-profile/update-profile.component';
import { ViewUserComponent } from './adminpage/view-user/view-user.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { ChangepasswordComponent } from './users/changepassword/changepassword.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { UpdateMyprofileComponent } from './update-myprofile/update-myprofile.component';
import { MyMoviesComponent } from './users/login/my-movies/my-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    MoviesComponent,
    PageNotFoundComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    LoginHomeComponent,
    AdminpageComponent,
    ForbiddenComponent,
    UpdateProfileComponent,
    ViewUserComponent,
    AddmovieComponent,
    ChangepasswordComponent,
    UpdateMovieComponent,
    UpdateMyprofileComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
