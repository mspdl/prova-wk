import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PedidoEditComponent } from './edit/pedido-edit.component';
import { PedidoListComponent } from './list/pedido-list.component';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  declarations: [
    PedidoEditComponent,
    PedidoListComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [
    PedidoEditComponent,
    PedidoListComponent,
    PedidosComponent
  ]
})
export class PedidosModule { }
