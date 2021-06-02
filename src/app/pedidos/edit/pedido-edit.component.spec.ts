import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEditComponent } from './pedido-edit.component';

describe('EditComponent', () => {
  let component: PedidoEditComponent;
  let fixture: ComponentFixture<PedidoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
