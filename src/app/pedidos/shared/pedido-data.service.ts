import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {

  private pedidoSource = new BehaviorSubject({ pedido: null, key: '' })
  currentPedido = this.pedidoSource.asObservable()

  constructor() { }

  changePedido(pedido: Pedido, key: string) {
    this.pedidoSource.next({ pedido: pedido, key: key })
  }
}
