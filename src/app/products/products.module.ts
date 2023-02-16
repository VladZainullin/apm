import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ReplacePipe} from "../shared/pipes/replace.pipe";
import {StarComponent} from "../shared/components/star/star.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail/product-detail.guard";
import {WelcomeComponent} from "../home/welcome/welcome.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
    ])
  ]
})
export class ProductsModule { }
