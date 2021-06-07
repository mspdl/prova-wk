import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Cliente } from 'src/app/clientes/shared/cliente';
import { ClienteService } from 'src/app/clientes/shared/cliente.service';
import { ProdutoService } from 'src/app/produtos/shared/produto.service';
import { Pedido } from '../shared/pedido';
import { PedidoDataService } from '../shared/pedido-data.service';
import { PedidoService } from '../shared/pedido.service';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'pedido-edit',
  templateUrl: './pedido-edit.component.html',
  styleUrls: ['./pedido-edit.component.scss']
})
export class PedidoEditComponent implements OnInit {

  pedido: Pedido
  pedidoKey: string = ''

  // TODO tipar depois
  clientes: Cliente[]
  clientesSelecionado: Cliente

  produtos = []
  produtosSelecionados = []
  dropdownSettings: IDropdownSettings = {}

  valorPedido = 0

  constructor(
    private pedidoService: PedidoService,
    private pedidoDataService: PedidoDataService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
   this.clienteService.getAll().subscribe(clientes =>  this.clientes = clientes)
   this.produtoService.getAll().subscribe(produtos => this.produtos = produtos)

   this.dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nome',
    itemsShowLimit: 5,
    enableCheckAll: false,
    unSelectAllText: 'Limpar seleção',
    allowSearchFilter: true
  };

    this.pedido = new Pedido()
    this.pedidoDataService.currentPedido.subscribe(data => {
      if (data.pedido && data.key) {
        this.pedido = new Pedido()
        this.pedido.cliente = data.pedido.cliente
        this.pedido.produtosPedido = data.pedido.itensVenda
        this.pedido.dataHoraPedido = data.pedido.momentoVenda
        this.pedido.valorTotalPedido = data.pedido.totalVenda

        this.pedidoKey = data.key
      }
    })
  }

  onSubmit() {
    debugger
    this.pedido.cliente = this.clientesSelecionado
    this.pedido.produtosPedido = this.produtosSelecionados
    this.pedido.dataHoraPedido = Date.now()
    this.pedido.valorTotalPedido = this.valorPedido
    if (this.pedidoKey) {
      this.pedidoService.update(this.pedido, this.pedidoKey)
    } else {
      this.pedidoService.insert(this.pedido)
    }

    this.reset()
  }

  reset() {
    this.pedido = new Pedido()
    this.pedidoKey = ''
    window.scrollTo(0, 100)
  }

  onChangeCliente(clienteId): void {
    console.log(clienteId);
    this.clientesSelecionado = this.clientes.find(cliente => cliente.id === clienteId)
    console.log(this.clientesSelecionado)
  }

  onItemSelect(produto: any ) {
    this.produtosSelecionados.push(this.produtos.find(p => p.id === produto.id))
    console.log(this.produtosSelecionados);
    this.somaPedido()
  }

  onDeSelect(produto: any ) {
    this.produtosSelecionados = this.produtosSelecionados.filter(p => p.id !== produto.id)
    console.log(this.produtosSelecionados);
    this.somaPedido()
  }

  somaPedido(){
    this.valorPedido = 0
    this.produtosSelecionados.forEach(a => this.valorPedido += a.valorUnitario)
    console.log(this.valorPedido)
  }

}
