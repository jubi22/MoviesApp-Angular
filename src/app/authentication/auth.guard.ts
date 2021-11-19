import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      let role = route.data['allowed'] as Array<string>;
      if (role) {
        if (this.service.RoleAuth(role)) {
          return true;
        }
        else {
          this.router.navigateByUrl('/not-allowed');
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigateByUrl('/user/login');
      return false;
    }
    
  }
  
}
