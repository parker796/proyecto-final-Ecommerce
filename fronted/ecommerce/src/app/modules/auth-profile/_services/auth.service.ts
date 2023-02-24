import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { Producto } from '../_model/Producto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  user: any;
  token: any = null;
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
    //tiene que cargarse el usuario y el token
    this.loadStorage();//nos va servir para ir viendo en los demas servicios si el usuario si esta autenticado
  }

  loadStorage(){//cargamos la data
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.user = localStorage.getItem('user');
    }else{
      this.token = '';
      this.user = null;
    }
  }

  login(nombreUsuario:String, clave:String){
    let URL = 'http://localhost:8080/usuario/login'; //esto se puede sustituir con una variable de ambiente
    return this.http.post(URL,{nombreUsuario, clave}).pipe(//mapeamos la respuesta
      map((resp:any) => {//y operamos con el pipe
        if(resp.token){ //si el token no esta vacio lo almacenamos en el localstorage
          //almacena en el localstorage la informacion
          return this.saveLocalStorageResponse(resp);
        }else{
          return resp; //si el token es vacio nos manda un error
        }
      }),//entonces atrapamos ese error del token vacio
      catchError((err:any) => {
        return of(err);
      })
    );
  }
  saveLocalStorageResponse(resp: any) {
    if(resp.token && resp.nombreUsuario){
      localStorage.setItem("token", resp.token); //almacenamos la respuesta en el localstorage
      localStorage.setItem("user", resp.nombreUsuario); //si fuera un json lo pasamos a un string con JsonStringfy
      //inicalizamos nuestras variables
      this.token = resp.token;
      this.user = resp.user;
      return true;
    }else{
      return false;
    }
  }
//aqui no nos genera un token
  registro(data: any) {
    let URL = 'http://localhost:8080/usuario/crear'; //esto se puede sustituir con una variable de ambiente
    return this.http.post(URL,data);
  }

  logout(){//resetamos todo
    this.user = null;
    this.token = '';
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/auth/login']);
   // document.location.reload(); 
  }

  baseUrl = 'http://localhost:8080/usuario/dell';

 getProductos() {
  let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<Producto[]>(this.baseUrl,{headers});
  }
  
}
