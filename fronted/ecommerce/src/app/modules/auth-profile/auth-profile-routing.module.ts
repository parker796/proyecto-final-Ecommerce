import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { ListarComponent } from './admin-productos/listar/listar.component';
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
