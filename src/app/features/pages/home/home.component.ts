import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/eCommerceAPI/product/product.service';
import { product_Interfcae } from '../../../shared/interfaces/product-interface';
import { ProductCardComponent } from "../../../shared/childComponents/productCard/product-card.component";
import { SliderhomeComponent } from "../../../shared/childComponents/sliderhome/sliderhome.component";
import { SearchPipe } from '../../../shared/Pppes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, SliderhomeComponent, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
      }
    })
  };
  ngOnDestory() :void{
    this.subscribeFn.unsubscribe();
  }
}
