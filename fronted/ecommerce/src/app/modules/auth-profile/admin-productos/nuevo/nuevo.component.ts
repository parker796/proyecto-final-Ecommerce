import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../_model/Producto';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  modelProducto = new Producto();
  
  constructor(private router:Router, private authService:AuthService){}
  productos!:Producto;

  ngOnInit(){
  }

  Guardar(producto:Producto){
    this.authService.createProducto(producto)
    .subscribe(data => {
      alert('Se agrego con exito');
      this.router.navigate(['/auth/admin-productos/listar']);
    })
  }

}
