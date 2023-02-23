import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
declare var $: any;
declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombreUsuario!:any;
  rol!:any;
  clave!:any;
  repeat_clave!:any;

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

  constructor(
      public authService:AuthService,
      public router:Router
  ){}

  registro(){
    if(!this.nombreUsuario || !this.rol || !this.clave || !this.repeat_clave){
      alert("necesitas escribir el nombre de usuario, rol, password o repetir el password");
      return;
    }
    if(this.clave != this.repeat_clave){
      alert("necesitas escribir las contraseñas iguales");
      return;
    }
    let data = {
      nombreUsuario:this.nombreUsuario,
      rol:this.rol,
      clave:this.clave
    }
      this.authService.registro(data).subscribe((resp:any) => {
        console.log(resp);
        this.router.navigate(["auth/login"]);
      });
  }
}
