import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product/id', component: ProductDetailComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/update', component: ProductUpdateComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
