import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Productos/listar/listar.component';
import { AgregarComponent } from './Productos/agregar/agregar.component';
import { EditarComponent } from './Productos/editar/editar.component';
import { FormsModule } from '@angular/forms'
import { ServiceService } from '../app/Service/service.service'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //y el modulo de form
    HttpClientModule //importamos el cliente de http para las peticiones del backend
  ],
  providers: [ServiceService], //importamos el servicio no olvidar
  bootstrap: [AppComponent]
})
export class AppModule { }
