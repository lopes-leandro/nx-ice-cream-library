import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return value ;
    if (typeof value === 'string') {
      const date = new Date(value);
      return isNaN(date.getTime()) ? '-' : date.toLocaleDateString('pt-BR');      
    }
    return value;
  }

}
