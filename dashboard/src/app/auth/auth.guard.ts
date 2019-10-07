import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private us: UserServiceService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let token = localStorage.getItem('token')
    if (this.us.isLoggedIn) {
      return true;
    }
    // if (this.us.isLoggedIn || token != null) {
    //   this.us.isLoggedIn = true;
    //   return true;
    // }

    this.us.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
