import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

// import { User } from '@app/_models';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private router: Router, private userService: UserService, @Inject(DOCUMENT) private document: Document) { }    

    ngOnInit() {
        this.document.body.classList.add('homePage');
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}