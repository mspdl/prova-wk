import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoDataService } from '../shared/produto-data.service';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.scss']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto
  produtoKey: string = ''

  constructor(
    private produtoService: ProdutoService,
    private produtoDataService: ProdutoDataService
  ) { }

  ngOnInit(): void {
    this.produto = new Produto()
    this.produtoDataService.currentProduto.subscribe(data => {
      if (data.produto && data.key) {
        this.produto.nome = data.produto.nome
        this.produto.valorUnitario = data.produto.valorUnitario.toString().replace('.', ',')

        this.produtoKey = data.key
      }
    })
  }

  onSubmit() {
    this.produto.valorUnitario = Number(this.produto.valorUnitario.toString().replace(',', '.'))

    if (this.produtoKey) {
      this.produtoService.update(this.produto, this.produtoKey)
    } else {
      this.produtoService.insert(this.produto)
    }

    this.produto = new Produto()
    this.produtoKey = ''
    this.reset()
  }

  reset() {
    this.produto = new Produto()
    this.produtoKey = ''
    window.scrollTo(0, 100)
  }

  isValidationOk(): boolean {
    if (!this.produto.nome
    || this.produto.nome?.length < 1
    || !this.produto.valorUnitario
    || this.produto.valorUnitario <= 0) {
      return false;
    }
    return true;
  }

}
