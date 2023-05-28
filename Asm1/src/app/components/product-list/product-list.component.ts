import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = []

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    }, (error: any) => console.log(error))
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete product success')
      this.products = this.products.filter(item => item.id === id)
    })
  }


}
