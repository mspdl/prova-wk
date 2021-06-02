import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

  private clienteSource = new BehaviorSubject({ cliente: null, key: '' })
  currentCliente = this.clienteSource.asObservable()

  constructor() { }

  changeCliente(cliente: Cliente, key: string) {
    this.clienteSource.next({ cliente: cliente, key: key })
  }
}
