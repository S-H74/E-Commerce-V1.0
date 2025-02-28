import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/eCommerceAPI/product/product.service';
import { product_Interfcae } from '../../../shared/interfaces/product-interface';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product_Information !: product_Interfcae;
  product_ID !:string | null;
  ngOnInit() :void{
    this.activatedRoute.paramMap.subscribe({
      next:(pId)=>{
        this.product_ID= pId.get('id');
        this.productService.getSpecificProduct(this.product_ID).subscribe({
          next:(res)=>{
            this.product_Information = res.data;
            console.log(this.product_Information);
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
      ,
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
