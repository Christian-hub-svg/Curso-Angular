import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome: string = 'Christian';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200';

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

}
