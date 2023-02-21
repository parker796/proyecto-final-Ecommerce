import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
declare var $: any;
declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
nombreUsuario: any = null;
clave: any = null;

constructor(public authService: AuthService){

}

  ngOnInit(): void{
    setTimeout(() => {
      initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
      //en el jquery para que nos funcione bien la plantilla
    },50);
  }

  login(){
    if(!this.nombreUsuario || !this.clave){
      alert("NECESITAS INGRESAR TU NOMBRE DE USUARIO O TU CLAVE");
      return;
    }
      this.authService.login(this.nombreUsuario, this.clave).subscribe((resp:any)=>{
        console.log(resp); //ya nos aseguramos de que nos devuelve el token
      });
  }
}
