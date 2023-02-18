import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Productos/agregar/agregar.component';
import { EditarComponent } from './Productos/editar/editar.component';
import { ListarComponent } from './Productos/listar/listar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'agregar', component:AgregarComponent},
  {path:"editar", component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
