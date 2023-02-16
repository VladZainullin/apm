import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private _activatedRoute: ActivatedRoute;
  private _router: Router;

  constructor(
    activatedRoute: ActivatedRoute,
    router: Router) {
    this._activatedRoute = activatedRoute;
    this._router = router;
  }
  pageTitle: string = 'Product detail';

  product: Product | undefined;

  ngOnInit(): void {
    const id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this.pageTitle += `: ${id}`
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
