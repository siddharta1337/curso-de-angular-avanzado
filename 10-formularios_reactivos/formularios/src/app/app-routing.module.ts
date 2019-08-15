import { FormularioReactivoComponent } from "./formulario-reactivo/formulario-reactivo.component";
import { FormularioBasicoComponent } from "./formulario-basico/formulario-basico.component";
import { ProductosComponent } from "./productos/productos.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "contacto",
    component: FormularioReactivoComponent
  },
  { path: "", redirectTo: "/contacto", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
