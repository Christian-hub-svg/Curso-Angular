//importando um decorator component
import { Component } from '@angular/core';

//Decorator que dentro irá metadados
@Component({
    /*selector é uma boa prática para criar Componentes
    HTML customizados. Ou seja, aqui irá o nome da tag
    que usaremos no HTML */
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro componente com Angular 2!<p>
    `
})

//Para exportar uma classe para outros lugares,
// colocamos simplesmente export antes da classe
export class MeuPrimeiroComponent { }
//Mas apenas isso não basta, precisamos declarar ele em um módulo!
