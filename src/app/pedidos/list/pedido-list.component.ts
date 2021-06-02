import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../shared/pedido';
import { PedidoDataService } from '../shared/pedido-data.service';
import { PedidoService } from '../shared/pedido.service';

@Component({
  selector: 'pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  // TODO tipar depois
  pedidos: Observable<any>

  constructor(
    private pedidoService: PedidoService,
    private pedidoDataService: PedidoDataService
  ) { }

  ngOnInit(): void {
    this.pedidos = this.pedidoService.getAll()
  }

  delete(key: string){
    this.pedidoService.delete(key)
  }

  edit(pedido: Pedido, key: string){
    this.pedidoDataService.changePedido(pedido, key)
  }

}
