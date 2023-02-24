import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthProfileModule } from '../auth-profile.module';
import { ListarComponent } from './listar/listar.component';
import { AuthProfileRoutingModule } from '../auth-profile-routing.module';
import { AuthProfileComponent } from '../auth-profile.component';



@NgModule({
  declarations: [
    AuthProfileComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    AuthProfileRoutingModule,
    SharedModule,
    FormsModule, //esto es para el formulario
    ReactiveFormsModule,
    HttpClientModule, //aqui nos marcaba error porque no importamos esto para usar ngModel
    //pero aun asi se mantuvo el error entonces nos fuimos al appModule
    RouterModule, //este la usamos para el routerLink
   
  ]
})
export class AdminProductosModule { }
