import { Component, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/cart-item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input({required: true}) oneCategory !: Category;
  @Output() flag:EventEmitter<boolean> =new EventEmitter();
  @Output() _categoryID:EventEmitter<string> =new EventEmitter();
  @Output() _categoryName:EventEmitter<string> = new EventEmitter();

  deferFlag(){
    this._categoryID.emit(this.oneCategory._id);
    this.flag.emit(true);
    this._categoryName.emit(this.oneCategory.name);
  }

}
