export class Movie {
  public MovieID: number;
  public MovieName: string;
  public Description: string;
  public Actor: string;

  constructor(id: number, name: string, content: string, actor: string) {
    this.MovieID = id;
    this.MovieName = name;
    this.Description = content;
    this.Actor = actor;
  }
}
