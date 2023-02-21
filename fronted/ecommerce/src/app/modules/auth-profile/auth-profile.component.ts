import { Component } from '@angular/core';

declare var $: any;
declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-auth-profile',
  templateUrl: './auth-profile.component.html',
  styleUrls: ['./auth-profile.component.css']
})
export class AuthProfileComponent {
    ngOnInit(): void{
        setTimeout(() => {
          initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
          //en el jquery para que nos funcione bien la plantilla
        },50);
    }
}
