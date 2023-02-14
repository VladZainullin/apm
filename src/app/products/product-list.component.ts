import {Component, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'pm-products',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
  imageWidth = 20;
  imageMargin = 20;
  showImage = false;
  pageTitle = 'Product List';
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

  get products(): Product[] {
    let normalizeListFilter = this._listFilter.toUpperCase();

    return this._service
      .getProducts()
      .filter(p => p.productName
        .toUpperCase()
        .includes(normalizeListFilter))
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('On init')
  }

  onStarClicked(rating: number): void {
    this.pageTitle = `Product rating is ${rating}`
  }
}
