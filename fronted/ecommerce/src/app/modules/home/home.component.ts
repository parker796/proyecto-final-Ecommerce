import { Component } from '@angular/core';
declare var $: any;
declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void{
    setTimeout(() => {
      initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
      //en el jquery para que nos funcione bien la plantilla
    },50);
}
}
