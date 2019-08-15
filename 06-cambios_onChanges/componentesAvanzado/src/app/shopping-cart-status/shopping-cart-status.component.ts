import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Producto } from "../interfaces/producto";

@Component({
  selector: "app-shopping-cart-status",
  templateUrl: "./shopping-cart-status.component.html",
  styleUrls: ["./shopping-cart-status.component.css"]
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges {
  @Input() precio: number;
  @Input() modeloDeTienda: Array<Producto>;

  @Output() pagar: EventEmitter<null> = new EventEmitter();

  constructor() {}

  realizarPago() {
    this.pagar.emit();
  }

  ngOnInit() {}

  ngOnChanges(cambios: SimpleChanges) {
    if (cambios.precio.currentValue < cambios.precio.previousValue) {
      alert("¿Seguro que deseas sacar items?");
    }
  }
}
