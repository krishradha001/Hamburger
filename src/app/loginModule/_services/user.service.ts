import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from '../_models/user';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private router: Router,) { }
    isLogin:Boolean = true;
    pageNames: any;

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getScreen(){    
        this.pageNames = ['/login', '/home'];
        if(this.pageNames.includes(this.router.url)){
            this.isLogin = true;
        }else{
            this.isLogin = false;
        }   
        console.log(this.isLogin);
    }
    
}