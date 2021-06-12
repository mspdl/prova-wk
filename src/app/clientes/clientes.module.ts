import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxMaskModule } from 'ngx-mask';
import { ClientesComponent } from './clientes.component';
import { ClienteEditComponent } from './edit/cliente-edit.component';
import { ClienteListComponent } from './list/cliente-list.component';

@NgModule({
  declarations: [
    ClienteEditComponent,
    ClienteListComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule.forRoot()
  ],
  exports: [
    ClienteEditComponent,
    ClienteListComponent,
    ClientesComponent
  ]
})
export class ClientesModule { }
