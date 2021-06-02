import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { MenuComponent } from './menu/menu.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '', component: MenuComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
