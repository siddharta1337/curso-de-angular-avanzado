import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBasicoComponent } from './formulario-basico.component';

describe('FormularioBasicoComponent', () => {
  let component: FormularioBasicoComponent;
  let fixture: ComponentFixture<FormularioBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
