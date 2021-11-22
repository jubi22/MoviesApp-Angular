
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UpdateProfileComponent } from './adminpage/update-profile/update-profile.component';
import { ViewUserComponent } from './adminpage/view-user/view-user.component';
import { AuthGuard } from './authentication/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateMyprofileComponent } from './update-myprofile/update-myprofile.component';
import { ChangepasswordComponent } from './users/changepassword/changepassword.component';
import { LoginHomeComponent } from './users/login/login-home/login-home.component';
import { LoginComponent } from './users/login/login.component';
import { MyMoviesComponent } from './users/login/my-movies/my-movies.component';
import { RegisterComponent } from './users/register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'login-page', component: LoginHomeComponent, canActivate: [AuthGuard] },
  {
    path: 'user', component: UsersComponent,
    children: [
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: { allowed: ['Admin'] } },

      { path: 'login', component: LoginComponent }]
  },
  { path: 'home', component: MainpageComponent },
  { path: 'my-movie/:id', component: MyMoviesComponent },
  { path: 'update-myprofile/:id', component: UpdateMyprofileComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'not-allowed', component: ForbiddenComponent },
  { path: 'changepwd', component: ChangepasswordComponent, canActivate: [AuthGuard] },
  { path: 'add-movie', component: AddmovieComponent, canActivate: [AuthGuard], data: {allowed:['Admin']} },
  {
    path: 'admin', component: AdminpageComponent, canActivate: [AuthGuard], data: { allowed: ['Admin'] }
  },
  { path: 'update/:id', component: UpdateProfileComponent, canActivate: [AuthGuard], data: { allowed: ['Admin'] } },
  { path: 'update-movie/:id', component: UpdateMovieComponent, canActivate: [AuthGuard], data: { allowed: ['Admin'] } },
  { path: 'viewuser/:id', component: ViewUserComponent, canActivate: [AuthGuard], data: { allowed: ['Admin'] } },
  { path: '**', component: PageNotFoundComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
