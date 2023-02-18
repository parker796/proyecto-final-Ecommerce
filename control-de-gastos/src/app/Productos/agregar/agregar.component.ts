import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  modelProducto = new Producto();
  
  constructor(private router:Router, private service:ServiceService){}
  productos!:Producto;

  ngOnInit(){
  }

  Guardar(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data => {
      alert('Se agrego con exito');
      this.router.navigate(['listar']);
    })
  }

}
