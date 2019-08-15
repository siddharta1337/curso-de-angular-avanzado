import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from "@angular/core";
import { Producto } from "../interfaces/producto";

@Component({
  selector: "app-shopping-cart-status",
  templateUrl: "./shopping-cart-status.component.html",
  styleUrls: ["./shopping-cart-status.component.css"]
})
export class ShoppingCartStatusComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input() precio: number;
  @Input() modeloDeTienda: Array<Producto>;

  @Output() pagar: EventEmitter<null> = new EventEmitter();

  constructor() {}

  realizarPago() {
    this.pagar.emit();
  }

  ngOnInit() {
    this.activarEventoTeclado();
  }
  ngOnDestroy() {
    document.removeEventListener("keypress", this.onTeclado);
  }

  ngOnChanges(cambios: SimpleChanges) {
    if (cambios.precio.currentValue < cambios.precio.previousValue) {
      alert("¿Seguro que deseas sacar items?");
    }
  }

  onTeclado(_evento) {
    console.log(_evento);
  }

  activarEventoTeclado() {
    document.addEventListener("keypress", evento => {
      this.onTeclado(evento);
    });
  }
}
