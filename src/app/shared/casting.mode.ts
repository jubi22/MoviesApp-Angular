export class Casting {
  //public UserName: string;
  //public Id: string;
  //public MovieName: string;
  public MovieID: number;
  public UserID: string;

  constructor(uname: string, id: string, mname: string, mid: number, uid: string) {
  /*  this.Id = id;*/
    this.MovieID = mid;
   /* this.MovieName = mname;*/
    this.UserID = uid;
    /*this.UserName = uname;*/
  }
}
