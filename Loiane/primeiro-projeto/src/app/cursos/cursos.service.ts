import { Injectable } from '@angular/core';

//Esse decorator que faz a injeção de dependências
@Injectable({
  providedIn: 'root'
})

//Aqui no service, nós criamos funções e métodos que irão
// realizar alguma lógica.

export class CursosService {

  constructor() { }

  getCursos(){
    return ['Esportes', 'Tecnologia', 'g1'];
  }
}
