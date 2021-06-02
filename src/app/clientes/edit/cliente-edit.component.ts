import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ClienteDataService } from '../shared/cliente-data.service';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

  cliente: Cliente
  clienteKey: string = ''

  constructor(
    private clienteService: ClienteService,
    private clienteDataService: ClienteDataService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente()
    this.clienteDataService.currentCliente.subscribe(data => {
      if (data.cliente && data.key) {
        this.cliente = new Cliente()
        this.cliente.nome = data.cliente.nome
        this.cliente.cpf = data.cliente.cpf
        this.cliente.bairro = data.cliente.bairro
        this.cliente.cep = data.cliente.cep
        this.cliente.cidade = data.cliente.cidade
        this.cliente.complemento = data.cliente.complemento
        this.cliente.logradouro = data.cliente.logradouro
        this.cliente.numero = data.cliente.numero
        this.cliente.email = data.cliente.email
        this.cliente.dataNasc = data.cliente.dataNasc

        this.clienteKey = data.key
      }
    })
  }

  onSubmit() {

    if (!this.cliente.complemento) {
      this.cliente.complemento = ''
    }

    if (this.clienteKey) {
      this.clienteService.update(this.cliente, this.clienteKey)
    } else {
      this.clienteService.insert(this.cliente)
    }

    this.reset()
  }

  reset() {
    this.cliente = new Cliente()
    this.clienteKey = ''
    window.scrollTo(0, 100)
  }

}
