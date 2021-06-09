import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteEditComponent } from './clientes/edit/cliente-edit.component';
import { ClienteListComponent } from './clientes/list/cliente-list.component';
import { MenuComponent } from './menu/menu.component';
import { PedidoEditComponent } from './pedidos/edit/pedido-edit.component';
import { PedidoListComponent } from './pedidos/list/pedido-list.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutoEditComponent } from './produtos/edit/produto-edit.component';
import { ProdutoListComponent } from './produtos/list/produto-list.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';


import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteEditComponent,
    ClienteListComponent,
    ClientesComponent,
    ProdutoEditComponent,
    ProdutoListComponent,
    ProdutosComponent,
    PedidoEditComponent,
    PedidoListComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
