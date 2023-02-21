import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  token: any = " ";
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
    //tiene que cargarse el usuario y el token
  }

  login(nombreUsuario:String, clave:String){
    let URL = 'http://localhost:8080/usuario/login'; //esto se puede sustituir con una variable de ambiente
    return this.http.post(URL,{nombreUsuario, clave});
  }
}
