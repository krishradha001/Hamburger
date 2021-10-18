import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../loginModule/_models/user';
import { AuthenticationService } from '../loginModule/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  route:any;

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  ngOnInit() {
    // throw new Error('Method not implemented.');
  }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}