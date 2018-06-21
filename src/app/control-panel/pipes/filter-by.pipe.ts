import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(arr: any[], obj: any): any {
    const { texto, tipo, estoque, grau } = obj;
    
    return arr.filter((val) => {
    
      const bool = (
        val[tipo].indexOf(texto) !== -1 && 
        estoque == "todos" ? true : val["estoque"] === estoque
      );
    
      return bool;
      
    });
  }

}
