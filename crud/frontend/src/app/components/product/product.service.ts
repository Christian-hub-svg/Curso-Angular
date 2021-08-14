import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
    //Aqui ele está criando um produto com o método post.
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
    //Aqui ele está lendo um produto com o get
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
    //Aqui ele também está lendo o produto, mas com um id específico
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;  
    return this.http.put<Product>(url, product);
    //Criamos o método de atualizar, utilizando o put
  }

  delete(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;  
    return this.http.delete<Product>(url);
    //Criamos o método de atualizar, utilizando o put
  }



}
