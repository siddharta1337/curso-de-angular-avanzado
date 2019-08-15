import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductosComponent } from "./productos/productos.component";
import { ContactoComponent } from "./contacto/contacto.component";

import { AppRoutingModule } from "./app-routing.module";
import { AlertaConfirmacionComponent } from "./alerta-confirmacion/alerta-confirmacion.component";
import { ContenedorImagenComponent } from "./contenedor-imagen/contenedor-imagen.component";
import { ShoppingCartStatusComponent } from "./shopping-cart-status/shopping-cart-status.component";
import { SinEstadoComponent } from "./sin-estado/sin-estado.component";
import { FormularioBasicoComponent } from "./formulario-basico/formulario-basico.component";
import { FormularioReactivoComponent } from "./formulario-reactivo/formulario-reactivo.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactoComponent,
    AlertaConfirmacionComponent,
    ContenedorImagenComponent,
    ShoppingCartStatusComponent,
    SinEstadoComponent,
    FormularioBasicoComponent,
    FormularioReactivoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
