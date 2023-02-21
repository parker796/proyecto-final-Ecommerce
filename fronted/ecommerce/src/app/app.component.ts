import { Component } from '@angular/core';

declare var $: any;
declare function initPageEcommerce([]):any;
//truco para que funione bien el app.js en nuestra plantilla
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  //puede ser en el constructor o en ciclo de vida de angular init para que recargue
  //los archivos jquery
  constructor(){
    setTimeout(() => {
      initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
      //en el jquery para que nos funcione bien la plantilla
    },50);
  }
}
