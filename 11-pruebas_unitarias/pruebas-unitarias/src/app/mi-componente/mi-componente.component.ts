import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mi-componente",
  templateUrl: "./mi-componente.component.html",
  styleUrls: ["./mi-componente.component.css"]
})
export class MiComponenteComponent implements OnInit {
  usuario: boolean;

  constructor() {}

  ngOnInit() {}

  activarUsuario() {
    this.usuario = true;
  }

  desactivarUsuario() {
    this.usuario = false;
  }

  verificarUsuario() {
    return this.usuario ? "usuario activo" : "usuario desactivado";
  }
}
