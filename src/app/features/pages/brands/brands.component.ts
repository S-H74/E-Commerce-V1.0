import { Component, inject } from '@angular/core';
import { BrandsService } from '../../../core/services/eCommerceAPI/brands/brands.service';
import { Brand } from '../../../shared/interfaces/product-interface';
import { BrandCardComponent } from '../../../shared/childComponents/brand-card/brand-card.component';

@Component({
  selector: 'app-brands',
  imports: [BrandCardComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  private brandsService = inject(BrandsService);
  _brnads :Brand []=[];
  ngOnInit() : void{
    this.brandsService.getSpecificBrandData().subscribe({
      next:(res)=>{
        this._brnads = res;
        console.log(this._brnads);
      }
    })
  };
}
