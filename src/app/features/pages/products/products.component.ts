import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/eCommerceAPI/product/product.service';
import { FormsModule } from '@angular/forms';
import { product_Interfcae } from '../../../shared/interfaces/product-interface';
import { SearchPipe } from '../../../shared/Pppes/search/search.pipe';
import { ProductCardComponent } from '../../../shared/childComponents/productCard/product-card.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  imports: [FormsModule,SearchPipe,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  userWord : string="";
  private productService = inject(ProductService);
  allProducts : product_Interfcae [] =[];
  subscribeFn : Subscription = new Subscription();

    ngOnInit() :void{
      this.showAllProducts();
    }
    showAllProducts()
    {
      this.subscribeFn = this.productService.getProductsWithShareReplay().subscribe({
        next:(res)=>{
          this.allProducts = res.data;
        },
        error:(err)=>{
          console.log(err);
        }
      })
    };
    ngOnDestory() :void{
      this.subscribeFn.unsubscribe();
    }

}
