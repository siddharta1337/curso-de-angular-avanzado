import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MiComponenteComponent } from "./mi-componente.component";

describe("Probando Mi Componente", () => {
  let component: MiComponenteComponent;
  let fixture: ComponentFixture<MiComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("debe activar un usuario", () => {
    component.activarUsuario();

    expect(component.usuario).toBeTruthy();
  });

  it("debe mostrar mensaje si el usuario es valido", () => {
    component.activarUsuario();

    expect(component.verificarUsuario()).toContain("usuario activo");
  });
});
