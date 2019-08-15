import { HttpClient } from "@angular/common/http";
import { AlertaConfirmacionComponent } from "./../alerta-confirmacion/alerta-confirmacion.component";
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Producto } from "../interfaces/producto";
import { Subscription } from "rxjs";

@Component({
  selector: "app-con-estado",
  templateUrl: "./con-estado.component.html",
  styleUrls: ["./con-estado.component.css"]
})
export class ConEstadoComponent implements OnInit, OnDestroy {
  modeloTienda: Object;
  itemsComprados: Array<Producto>;

  @ViewChild(AlertaConfirmacionComponent, { static: false })
  alertChild: AlertaConfirmacionComponent;

  private tiendaSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.itemsComprados = [];
    this.modeloTienda = { tiendaItems: [] };
  }

  ngOnInit() {
    this.tiendaSubscription = this.http
      .get("http://localhost:4200/assets/data/data.json")
      .subscribe((resultados: Array<object>) => {
        this.modeloTienda = resultados;
      });
  }

  ngOnDestroy() {
    this.tiendaSubscription.unsubscribe();
  }

  seleccionarItem(item) {
    this.itemsComprados.push(item);
  }

  onProductoSeleccionado(_evento: Producto) {
    this.seleccionarItem(_evento);
  }

  getPrecioTotal() {
    if (this.itemsComprados) {
      return this.itemsComprados.reduce(
        (prev: number, item: Producto) => prev + item.precio,
        0
      );
    }
  }

  realizarPago() {
    this.alertChild.mostrar();
  }
}
