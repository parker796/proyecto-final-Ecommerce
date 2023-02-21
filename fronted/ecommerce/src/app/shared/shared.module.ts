import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //esto es para el formulario
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule //este la usamos para el routerLink
  ],
  exports:[//esta linea se agrega para exponer los componentes compartidos
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
