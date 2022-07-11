import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { RoutesService } from './services/routes.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  token: string;
  constructor(private routerService: RoutesService, private authenticationService: AuthService) {
    this.token = this.authenticationService.getBearerToken();
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.authenticationService.isUserAuthenticated(this.token).then((data: any) => {
        if (!data) {
          reject(false);
          this.routerService.routeToLogin();
        } else {
          resolve(true);
        }
      })
    })
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return new Promise((resolve, reject) => {
  //     console.log("CanActivateRouteGuard token" + this.token);
  //     this.authenticationService.isUserAuthenticated(this.token).then((data) => {
  //       if (!data) {
  //         reject(false);
  //         this.routerService.routeToLogin();
  //       } else {
  //         resolve(true);
  //       }
  //     });
  //   }
  //   );
  // }
}