import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../_model/Producto';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {
  productos!:Producto[];

  constructor(private authService:AuthService, private router:Router){}
  ngOnInit(){
      this.authService.getProductos()
      .subscribe( data => {
        this.productos = data;
        //alert(data[0].id + " " + data[0].disco + " " + data[0].memoriaRam + " " + data[0].procesador);
      })
  }
}
