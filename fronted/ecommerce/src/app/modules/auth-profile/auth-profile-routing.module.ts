import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileRoutingModule { }
