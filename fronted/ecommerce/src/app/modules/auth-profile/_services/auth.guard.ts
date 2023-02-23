import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( public authService: AuthService, public router: Router) {
      
    }
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //checamos primero si no tiene el token ni el usuario los mandamos al login
      if(!this.authService.user && !this.authService.token){
        this.router.navigate(["auth/login"]);
        return false;
      }
      //checamos el token
      let token = this.authService.token;
      //con esta parte atob nos descodifica el token que viene en base 64 accedemos
      //a la segunda parte del punto y obtenemos la fecha y hora de expiracion del token
      let expiracion = (JSON.parse(atob(token.split('.')[1]))).exp;
      console.log(expiracion);
      if(Math.floor((new Date).getTime() / 1000) >= expiracion){//verificamos con la fecha y hora actual lo pasamos a milisegundos
        this.authService.logout(); //nos salimos si la fecha y hora de expiracion ya se pasaron
        return false;
      }
      return true;
    }


  
}
