import { Producto } from "./../interfaces/producto";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sin-estado",
  templateUrl: "./sin-estado.component.html",
  styleUrls: ["./sin-estado.component.css"]
})
export class SinEstadoComponent implements OnInit {
  @Input() producto: Producto;

  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();

  private disabled: boolean;
  public accionCompra: string;

  constructor() {}

  ngOnInit() {
    this.accionCompra = `BUY FOR $${this.producto.precio}`;
  }

  seleccionarItem() {
    this.disabled = true;
    this.accionCompra = "ADDED TO CART";
    this.productoSeleccionado.emit(this.producto);
  }

  isItemDisabled() {
    return !!this.disabled;
  }
}
