import { Data } from "@angular/router";

export class User {
  public UserName: string;
  public Email: string;
  public Password: string;
  public DOB: Date;
  public Id: string;
  public MovieName: string;

  constructor(UserName: string, Email: string, Pasword: string, DOB: Date, Id: string, MovieName: string) {
    this.UserName = UserName;
    this.Email = Email;
    this.Password = this.Password;
    this.DOB = this.DOB;
    this.Id = this.Id;
    this.MovieName = MovieName;
  }
}
