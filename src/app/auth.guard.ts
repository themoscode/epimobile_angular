import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.user.isLoggedIn()){
      //if (1 === 1){  
        return true;
      }
      else {
        this.router.navigate(['/'])
        return false;
      }
    
  }
}
