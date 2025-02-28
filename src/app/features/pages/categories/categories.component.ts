import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../../core/services/eCommerceAPI/categories/categories.service';
import { Category } from '../../../shared/interfaces/product-interface';
import { CategoryCardComponent } from '../../../shared/childComponents/category-card/category-card.component';
import { SucCategoriesOfCategoryComponent } from '../../../shared/childComponents/suc-categories-of-category/suc-categories-of-category.component';

@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent,SucCategoriesOfCategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  private CategoriesService = inject(CategoriesService);
  _allCategories : Category[]=[];
  _Categories_Id : string[] =[];
  _categoryID !:string;
  _categoryName_ !: string;
  flag : boolean =false
  // deferflag =false;
  ngOnInit(): void{
    this.CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this._allCategories = res.data;
        console.log(this._allCategories);
        this._Categories_Id = this._allCategories.map(category => category._id);
        console.log(this._categoryName_);
      }
    })
  }
}
