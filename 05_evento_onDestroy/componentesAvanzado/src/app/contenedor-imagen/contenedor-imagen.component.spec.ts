import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorImagenComponent } from './contenedor-imagen.component';

describe('ContenedorImagenComponent', () => {
  let component: ContenedorImagenComponent;
  let fixture: ComponentFixture<ContenedorImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
