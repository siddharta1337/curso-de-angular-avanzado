import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contenedor-imagen",
  templateUrl: "./contenedor-imagen.component.html",
  styleUrls: ["./contenedor-imagen.component.css"]
})
export class ContenedorImagenComponent implements OnInit {
  @Input() imagen: string;

  constructor() {}

  ngOnInit() {}

  isItemDisabled() {}
}
