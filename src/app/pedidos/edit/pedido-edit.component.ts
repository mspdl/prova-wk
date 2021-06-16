import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Cliente } from 'src/app/clientes/shared/cliente';
import { ClienteService } from 'src/app/clientes/shared/cliente.service';
import { ProdutoService } from 'src/app/produtos/shared/produto.service';
import { Pedido } from '../shared/pedido';
import { PedidoService } from '../shared/pedido.service';


@Component({
  selector: 'pedido-edit',
  templateUrl: './pedido-edit.component.html',
  styleUrls: ['./pedido-edit.component.scss']
})
export class PedidoEditComponent implements OnInit {

  clientes: Cliente[]
  clienteSelecionado: Cliente

  produtos = []
  produtosSelecionados = []
  produtosDropdownSettings: IDropdownSettings = {}

  valorPedido = 0

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(clientes =>  this.clientes = clientes)
    this.produtoService.getAll().subscribe(produtos => this.produtos = produtos)

    this.produtosDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      itemsShowLimit: 5,
      enableCheckAll: false,
      unSelectAllText: 'Limpar seleção',
      allowSearchFilter: true
    };

  }

  onSubmit() {
    let pedido: Pedido = new Pedido()
    pedido.cliente = this.clienteSelecionado
    pedido.produtosPedido = this.produtosSelecionados
    pedido.dataHoraPedido = Date.now()
    pedido.valorTotalPedido = this.valorPedido
    this.pedidoService.insert(pedido)

    this.reset()
  }

  reset() {
    // Para resetar o cliente selecionado
    this.clienteSelecionado = undefined
    this.clienteService.getAll().subscribe(clientes =>  this.clientes = clientes)

    this.produtosSelecionados = []
    window.scrollTo(0, 100)
  }

  onChangeCliente(clienteKey): void {
    this.clienteSelecionado = this.clientes.find(cliente => cliente.key === clienteKey)
  }

  onItemSelect(produto: any ) {
    this.produtosSelecionados.push(this.produtos.find(p => p.id === produto.id))
    this.somaPedido()
  }

  onDeSelect(produto: any ) {
    this.produtosSelecionados = this.produtosSelecionados.filter(p => p.id !== produto.id)
    this.somaPedido()
  }

  somaPedido(){
    this.valorPedido = 0
    this.produtosSelecionados.forEach(a => this.valorPedido += a.valorUnitario)
  }

}
