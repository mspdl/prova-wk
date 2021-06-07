import { Cliente } from "src/app/clientes/shared/cliente"
import { Produto } from "src/app/produtos/shared/produto"

export class Pedido {
  key: string
  dataHoraPedido: number
  cliente: Cliente
  produtosPedido: Produto[]
  valorTotalPedido: number
}
