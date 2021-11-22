export class ChangePassword {
  public CurrentPassword: string;
  public NewPassword: string;
  public ConfirmNewPassword: string;
  public Id: string;
  constructor(oldpwd: string, newpwd: string, cnewpwd: string, id: string) {
    this.CurrentPassword = oldpwd;
    this.NewPassword = newpwd;
    this.ConfirmNewPassword = cnewpwd;
    this.Id = id;
  }
}
