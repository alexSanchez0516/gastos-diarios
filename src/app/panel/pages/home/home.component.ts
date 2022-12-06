import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get user() {
    return this.authService.user;
  }

  constructor(private authService: AuthService,
              private router: Router) {
    console.log(this.user);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth').then();
  }


}
