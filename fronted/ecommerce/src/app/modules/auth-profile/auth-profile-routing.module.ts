import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { EditarComponent } from './admin-productos/editar/editar.component';
import { ListarComponent } from './admin-productos/listar/listar.component';
import { NuevoComponent } from './admin-productos/nuevo/nuevo.component';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthProfileComponent,
    children: [ //hacia el componente hijo seguimos esta ruta
        {
          path:'login',
          component: LoginComponent
        },
        {
          path:'registro',
          component: RegisterComponent
        },
        {
          path:'admin-productos',
          component: AdminProductosComponent,
          children:[
                {
                  path:'listar',
                  component: ListarComponent
                },
                {
                  path:'nuevo',
                  component: NuevoComponent
                },
                {
                  path:'editar',
                  component: EditarComponent
                }
          ]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileRoutingModule { }
