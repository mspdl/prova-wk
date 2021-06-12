import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../shared/cliente';
import { ClienteDataService } from '../shared/cliente-data.service';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  // TODO tipar depois
  clientes: Observable<any>

  cancelClicked = false
  confirmText= 'Deletar'
  cancelText= 'Cancelar'
  closeOnOutsideClick= true
  popoverTitle= 'Confirmar deleção'
  popoverMessage=`Deseja mesmo deletar o cliente?`

  constructor(
    private clienteService: ClienteService,
    private clienteDataService: ClienteDataService
  ) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getAll()
  }

  delete(key: string){
    this.clienteService.delete(key)
  }

  edit(cliente: Cliente, key: string){
    this.clienteDataService.changeCliente(cliente, key)
    window.scrollTo(0, 100)
  }

}
