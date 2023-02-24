import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
declare var $: any;
declare function initPageEcommerce([]):any;
@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {
    constructor(public authService: AuthService, public router: Router){}

    ngOnInit(): void{
      setTimeout(() => {
        initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
        //en el jquery para que nos funcione bien la plantilla
      },50);
      //checamos si ya estan logeados no tiene caso que este aqui en esta vista
      if(!this.authService.user && !this.authService.token){
         this.router.navigate(['/auth/login']); //ve a la vista del home o al login
        //document.location.reload();
      }
    }

    title = 'Administrador' + this.authService.user;

    Listar(){
      this.router.navigate(["/auth/admin-productos/listar"]) //se pone el nombre que pusimos en path de app-routing
    }
}

