import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate
{
    constructor(private router: Router, private authService: AuthService) { }

    canActivate():boolean {
        if(!this.authService.isAuthenticated()){
            console.log('adadf')
            this.router.navigate(['/users/login']);
            return false;
        }
        return true;
    }
}
