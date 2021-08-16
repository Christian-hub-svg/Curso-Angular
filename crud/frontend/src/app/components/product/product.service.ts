import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    //Aqui ele está criando um produto com o método post.
    //Criamos um pipe para mostrar que se der erro, ele pegue o erro
    //e mostre o errorHandler
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );;
    //Aqui ele está lendo um produto com o get
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    //Aqui ele também está lendo o produto, mas com um id específico
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;  
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    //Criamos o método de atualizar, utilizando o put
  }

  delete(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;  
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    //Criamos o método de atualizar, utilizando o put
  }

  errorHandler(e: any): Observable<any>{
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
    //Aqui ele mostra a mensagem, deixa o erro como true
    // e retorna um observable vazio
  }

}
