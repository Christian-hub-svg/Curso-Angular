import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Aqui passamos um parâmetro do tipo Router para o constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    //Pegamos o parâmetro e navegamos até a URL que colocamos ai
    this.router.navigate(['/products/create']);
  }

}
