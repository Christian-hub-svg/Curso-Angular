import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    //Essa é a pincipal diferença entre o módulo raiz:
    //aqui ele importa as funcionalidades do módulo raiz.
    CommonModule
  ],
  //Esse metadado exporta declarações do módulo
  exports: [
    CursosComponent
  ],
    //Quem são os servidores de serviço do módulo
    //E como o módulo está ligado com o app, podemos usar
    //módulo raiz também
  providers: [ CursosService ]
})
export class CursosModule { }
