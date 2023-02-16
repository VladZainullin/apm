import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ReplacePipe} from "../shared/pipes/replace.pipe";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail/product-detail.guard";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ReplacePipe,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductsModule { }
