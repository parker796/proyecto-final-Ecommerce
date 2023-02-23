import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

constructor(public authService: AuthService, public router: Router){

}

  ngOnInit(): void{
    setTimeout(() => {
      initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
      //en el jquery para que nos funcione bien la plantilla
    },50);
    //checamos si ya estan logeados no tiene caso que este aqui en esta vista
    if(this.authService.user && this.authService.token){
        this.router.navigate(['/']); //ve a la vista del home
    }
  }

  login(){
    if(!this.nombreUsuario || !this.clave){
      alert("NECESITAS INGRESAR TU NOMBRE DE USUARIO O TU CLAVE");
      return;
    }
      this.authService.login(this.nombreUsuario, this.clave).subscribe((resp:any)=>{
        console.log(resp); //ya nos aseguramos de que nos devuelve el token
        if(resp == true){
          //si todo salio bien volver al home como usuario autenticado
          document.location.reload(); //como un aviso de que todo salio bien recargamos
        
        }else{
          if(resp.status == 401){
            alert("EL USUARIO O CONTRASEÑA SON INCORRECTOS ");
            return;
          }
        //pero en lugar de que nos devuelva el token nos manda el true porque usamos el pipe
      }
    });
  }
}
