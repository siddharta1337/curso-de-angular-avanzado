import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConEstadoComponent } from './con-estado.component';

describe('ConEstadoComponent', () => {
  let component: ConEstadoComponent;
  let fixture: ComponentFixture<ConEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
