import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private db: AngularFireDatabase) { }

  insert(pedido: Pedido) {
    this.db.list('pedido')
      .push(pedido)
      .then((result: any) => {
        console.log("Pedido registrado com chave " + result.key)
        pedido.key = result.key
      })
  }

  update(pedido: Pedido, key: string) {
    this.db.list('pedido').update(key, pedido)
      .catch((error: any) => {
        console.error("Erro ao atualizar pedido " + key + ": " + error)
      })
  }

  getAll() {
    return this.db.list('pedido')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as Pedido }))
        })
      )
  }

  delete(key: string) {
    this.db.object(`pedido/${key}`).remove()
  }

}
