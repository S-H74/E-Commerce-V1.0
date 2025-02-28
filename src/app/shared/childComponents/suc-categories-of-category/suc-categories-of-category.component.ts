import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { SubCategoriesService } from '../../../core/services/eCommerceAPI/subCategories/sub-categories.service';
import { Subcategory } from '../../interfaces/product-interface';

@Component({
  selector: 'app-suc-categories-of-category',
  imports: [],
  templateUrl: './suc-categories-of-category.component.html',
  styleUrl: './suc-categories-of-category.component.scss'
})
export class SucCategoriesOfCategoryComponent {
  @Input({required:true}) subCategoriesOfCategory !: string;
  @Input ({required: true}) NameOfCategoryForCategories !:string;
  private _subCategoriesService = inject(SubCategoriesService);
  arrOFCategories !: Subcategory[];
  ngOnChanges(changes :SimpleChanges):void{
    this.getSubCateogry();
  }
  getSubCateogry(){
    this._subCategoriesService.getAllSubCategoriesOnCategory(this.subCategoriesOfCategory).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.arrOFCategories = res.data;
      }
    })
  }


}
