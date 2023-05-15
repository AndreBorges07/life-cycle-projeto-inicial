import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('item') || '[]');
  }

  // Serve para mostrar a lista na tela
  getListaDeCompra() {
    return this.listaDeCompra;
  }

  // Monta o item todo para depois ser salvo na lista
  criarItem(nomeDoItem: string) {
    const id_ = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id_, //Já guarda o ID pela quantidade de itens na lista mais 1.
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-BR'), // Já coloca a data do dia de hoje
      comprado: false,
    };
    return item;
  }

  // Add o item dentro da lista
  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
    // this.atualizarLocalStorage;
  }

  //Editar o item que já está na lista
  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    // this.atualizarLocalStorage;
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
