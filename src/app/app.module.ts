import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from './shared/pipes/replace.pipe';
import {StarComponent} from './shared/components/star/star.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
