import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    DashboardComponent,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
