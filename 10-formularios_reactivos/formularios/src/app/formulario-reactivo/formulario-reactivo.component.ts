import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario-reactivo",
  templateUrl: "./formulario-reactivo.component.html",
  styleUrls: ["./formulario-reactivo.component.css"]
})
export class FormularioReactivoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  formulario: FormGroup;

  ngOnInit() {
    this.formulario = this.fb.group({
      name: [
        "Carlos",
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)]
      ],
      email: ["", [Validators.email, Validators.required]]
    });
  }

  onSubmit(_datos) {
    console.log(_datos.value);
  }
}
