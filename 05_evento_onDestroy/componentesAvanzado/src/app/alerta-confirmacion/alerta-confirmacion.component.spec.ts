import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaConfirmacionComponent } from './alerta-confirmacion.component';

describe('AlertaConfirmacionComponent', () => {
  let component: AlertaConfirmacionComponent;
  let fixture: ComponentFixture<AlertaConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
