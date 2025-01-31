import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency',
  standalone: true
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, currencyCode: string = 'BRL'): string | number {

    if (typeof value === 'number') {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyCode }).format(value);
    }
    return value;
  }

}
