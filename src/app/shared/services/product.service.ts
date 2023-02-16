import {Injectable} from '@angular/core';
import {Product} from "../../products/product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = 'api/products/products.json';
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getProducts(): Observable<Product[]> {
    return this._http
      .get<Product[]>(this._productUrl)
      .pipe(
        tap(d => console.log(d)),
        catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
