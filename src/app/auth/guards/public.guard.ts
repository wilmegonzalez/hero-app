
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})

export class PublicGuard implements CanMatch, CanActivate {

    constructor(private authService: AuthService, private router : Router) { }

    private checkAuthStatus(): boolean | Observable<boolean>{

    return this.authService.checkAuthentication()
    .pipe(
        tap(isAuthenticated => console.log('Authentication: ', isAuthenticated)),
        tap( isAuthenticated =>{
            if (isAuthenticated) {
                
                this.router.navigate(['./heroes/list'])
            } 
        }),
        map( isAuthenticated => !isAuthenticated)

    )

        
}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
        
        return this.checkAuthStatus()
    }
    
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> |  boolean  {

        return this.checkAuthStatus()
       
    }
    
}