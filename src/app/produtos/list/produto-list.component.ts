import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../shared/produto';
import { ProdutoDataService } from '../shared/produto-data.service';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  // TODO tipar depois
  produtos: Observable<any>

  constructor(
    private produtoService: ProdutoService,
    private produtoDataService: ProdutoDataService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll()
  }

  delete(key: string){
    this.produtoService.delete(key)
  }

  edit(produto: Produto, key: string){
    this.produtoDataService.changeProduto(produto, key)
  }

}
