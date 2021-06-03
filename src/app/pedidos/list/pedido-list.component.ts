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

  pedidos: Pedido[]

  constructor(
    private pedidoService: PedidoService,
    private pedidoDataService: PedidoDataService
  ) { }

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe(pedidos => this.pedidos = pedidos)
    console.log(this.pedidos)
  }

  delete(key: string){
    console.log(this.pedidos)
  }

  edit(pedido: Pedido, key: string){
    this.pedidoDataService.changePedido(pedido, key)
  }

}