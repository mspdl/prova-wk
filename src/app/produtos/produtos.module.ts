import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoEditComponent } from './edit/produto-edit.component';
import { ProdutoListComponent } from './list/produto-list.component';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [
    ProdutoEditComponent,
    ProdutoListComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ProdutoEditComponent,
    ProdutoListComponent,
    ProdutosComponent
  ]
})
export class ProdutosModule { }
