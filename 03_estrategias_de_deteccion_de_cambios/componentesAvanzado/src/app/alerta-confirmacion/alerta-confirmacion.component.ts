import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-alerta-confirmacion",
  templateUrl: "./alerta-confirmacion.component.html",
  styleUrls: ["./alerta-confirmacion.component.css"]
})
export class AlertaConfirmacionComponent implements OnInit {
  public active: Boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit() {}

  ocultar() {
    this.active = false;
  }

  mostrar() {
    this.active = true;
  }
}
