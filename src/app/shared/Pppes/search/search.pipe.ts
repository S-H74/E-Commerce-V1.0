import { Pipe, PipeTransform } from '@angular/core';
import { product_Interfcae } from '../../interfaces/product-interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(allProducts: product_Interfcae[],word_Search : string): product_Interfcae[] {
    return allProducts.filter(element => element.title?.toLowerCase().includes(word_Search.toLowerCase()));
  };
}
