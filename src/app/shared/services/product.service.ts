import {Injectable} from '@angular/core';
import {Product} from "../../products/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
    return this._http.get<Product[]>(this._productUrl);
  }
}
