import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }

  insert(produto: Produto) {
    this.db.list('produto')
      .push(produto)
      .then((result: any) => {
        console.log("Produto registrado com chave " + result.key)
        produto.key = result.key
        this.update(produto, result.key)
      })
  }

  update(produto: Produto, key: string) {
    this.db.list('produto').update(key, produto)
      .catch((error: any) => {
        console.error("Erro ao atualizar produto " + key + ": " + error)
      })
  }

  getAll() {
    return this.db.list('produto')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as Produto }))
        })
      )
  }

  delete(key: string) {
    this.db.object(`produto/${key}`).remove()
  }

}
