import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../_model/Producto';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  producto!:Producto[];
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = (localStorage.getItem("id")!);
    this.authService.getProductoId(+id)
    .subscribe(data => {
    //  console.log("nos manda un sucess", data);
      this.producto = data
      console.log("producto", this.producto);
    }), (error: any) => {
      console.log('error : ', error);
    }
  }
 

  Actualizar(producto:Producto){
    this.authService.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["/auth/admin-productos/listar"]);
    })
  }
  
}
