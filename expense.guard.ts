import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
     let t= this.authService.isUserLoggedIn;
     if(window.localStorage.getItem('isUserLoggedIn'))
     {
      return t;
     }
     else{
      return t;
     }
    }
  }