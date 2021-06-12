import { Component, OnInit, TrackByFunction } from '@angular/core';
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

  cancelClicked = false
  confirmText= 'Deletar'
  cancelText= 'Cancelar'
  closeOnOutsideClick= true
  popoverTitle= 'Confirmar deleção'
  popoverMessage=`Deseja mesmo deletar o produto?`

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
    window.scrollTo(0, 100)
  }

}
