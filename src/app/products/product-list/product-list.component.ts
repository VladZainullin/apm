import {Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'pm-products',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
  imageWidth = 20;
  imageMargin = 20;
  showImage = false;
  pageTitle = 'Product List';
  sub!: Subscription;
  private _service: ProductService;

  constructor(service: ProductService) {
    this._service = service;
  }

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
  }

  private _products: Product[] = [];
  get products(): Product[] {
    let normalizeListFilter = this._listFilter.toUpperCase();

    return this._products
      .filter(p => p.productName
        .toUpperCase()
        .includes(normalizeListFilter));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this._service
      .getProducts()
      .subscribe({
        next: p => {
          this._products = p
        },
        error: err => console.log(err)
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onStarClicked(rating: number): void {
    this.pageTitle = `Product rating is ${rating}`
  }
}
