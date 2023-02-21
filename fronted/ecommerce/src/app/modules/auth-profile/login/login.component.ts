import { Component } from '@angular/core';
declare var $: any;
declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(): void{
    setTimeout(() => {
      initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
      //en el jquery para que nos funcione bien la plantilla
    },50);
}
}
