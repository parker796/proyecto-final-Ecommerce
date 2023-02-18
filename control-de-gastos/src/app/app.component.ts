import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-de-gastos';
  
  constructor(private router:Router){

  }

  Listar(){
    this.router.navigate(["listar"]) //se pone el nombre que pusimos en path de app-routing
  }
  Nuevo(){
    this.router.navigate(["agregar"])
  }
}
