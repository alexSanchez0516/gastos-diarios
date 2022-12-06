import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {


  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate() : Observable<boolean>  | boolean {
    console.log('canActivate');
    return this.authService.validateToken()
      .pipe(
        tap( valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth').then();
          }
        })
      )
  }

  canLoad() : Observable<boolean>  | boolean {
    console.log('canLoad');
    return this.authService.validateToken().pipe(
      tap( valid => {
        if (!valid) {
          this.router.navigateByUrl('/auth').then();
        }
      })
    )
  }

}
