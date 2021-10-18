import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from './loginModule/_services';
import { User } from './loginModule/_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })

export class AppComponent implements OnInit {
    
    opened=true;
    isDisplay=true;
    // isLogin:Boolean = true;
    checkScreen:Boolean = true;

    toggle()
    {
        this.isDisplay=!this.isDisplay;
    }
    currentUser: User;

    constructor(
        private userService:UserService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // this.currentUser = true;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(){  
        setTimeout(() => {
            this.userService.getScreen();
            this.checkScreen = this.userService.isLogin;
            console.log(this.checkScreen);    
        }, 2000);        
    }

    
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}