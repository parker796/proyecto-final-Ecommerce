import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  producto!:Producto[];
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = (localStorage.getItem("id")!);
    this.service.getProductoId(+id)
    .subscribe(data => {
    //  console.log("nos manda un sucess", data);
      this.producto = data
      console.log("producto", this.producto);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }
 

  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto[0]=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}