//Importando o módulo
import { NgModule } from '@angular/core';
//Prepara para rodar no browser
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importamos o componente aqui para o módulo!
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

//Esse decorator fala que isso é um módulo
@NgModule({
  //declarations lista todos os componentes, diretivas e pipes
  declarations: [
    AppComponent,
    //Declarando o componente no módulo!
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  //imports: colocamos outros módulos que queremos utilizar no módulo
  //ou dentro de um componente desse módulo
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  //onde colocamos os serviços para esse módulo
  providers: [],
  //Isso fica apenas no módulo raiz, isso mostra qual componente
  //será mostrado quando iniciamos
  bootstrap: [AppComponent]
})
//Declarando e exportando a classe AppModule
export class AppModule { }
