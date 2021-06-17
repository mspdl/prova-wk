import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PedidoRegisterComponent } from './register/pedido-register.component';
import { PedidoListComponent } from './list/pedido-list.component';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  declarations: [
    PedidoRegisterComponent,
    PedidoListComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ConfirmationPopoverModule.forRoot()
  ],
  exports: [
    PedidoRegisterComponent,
    PedidoListComponent,
    PedidosComponent
  ]
})
export class PedidosModule { }
