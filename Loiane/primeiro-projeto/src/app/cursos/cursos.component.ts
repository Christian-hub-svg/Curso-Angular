import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Tipando uma variável.
  nomePortal: string;

  //criando uma variável vetor
  cursos!: string[];

  //Fizemos aqui a injeção de dependências, passando o
  //cursosService como um parâmetro
  constructor(private cursosService: CursosService) {
    
    this.nomePortal = 'https://www.globo.com/';

    // for(let i=0; i < this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }
    // Isso será traduzido no template!

    // var servico = new CursosService();
    //Estamos buscando de maneira manual, vamos usar a
    //Injeção de dependências!

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
