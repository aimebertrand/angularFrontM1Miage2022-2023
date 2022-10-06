import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return this.authService.isAdmin()
      .then(
        (authentifie) => {
          if(authentifie) {
            console.log("JE SUIS VRAI");
            return true; // est authorised par le navigateur
          } else {
            console.log("JE SUIS FAUX");
            this.router.navigate(['/home']);
            return false; // on authorize pas la navigation
          }
      }
    )
  }

}
