import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { After } from 'v8';

@Directive({
  selector: '[icmTableStyleCondensed]',
  standalone: true
})
export class TableStyleCondensedDirective implements AfterViewInit {

  @Input() headerGroupTitle: string = 'Grupo';

  protected title!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.title = this.headerGroupTitle;
  }

  ngAfterViewInit(): void {
    this.addNewRow();
    this.applyStyle();
  }

  applyStyle(): void {
    const table = this.el.nativeElement.querySelector('table');
    if (table) {
      this.renderer.addClass(table, 'table-style-condensed');
    }
  }


  addNewRow(): void {
    const table = this.el.nativeElement as HTMLTableElement;
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    const headerRow = thead?.querySelector('tr');

    if (headerRow && tbody) {
      const newRow = this.renderer.createElement('tr');

      headerRow.querySelectorAll('th').forEach(th => {
        const newCell = this.renderer.createElement('td');
        const text = this.renderer.createText(th.textContent || '');

        this.renderer.appendChild(newCell, text);
        this.renderer.appendChild(newRow, newCell);
      });

      const firstRow = tbody.querySelector('tr');
      if (firstRow) {
        this.renderer.insertBefore(tbody,newRow, firstRow);
      } else {
        this.renderer.appendChild(tbody, newRow)
      }
    }

    this.modifyThead(headerRow);
  }

  modifyThead(headerRow: HTMLTableRowElement | null | undefined): void {

    if (!headerRow) return;

    const thElements = headerRow.querySelectorAll('th');

    if (thElements.length > 1) {

      this.renderer.setProperty(thElements[0], 'textContent', '');

      for (let i = thElements.length -1; i > 0; i--) {
        this.renderer.removeChild(headerRow, thElements[i]);        
      }

      const groupedTh = this.renderer.createElement('th');

      this.renderer.setAttribute(groupedTh, 'colspan', (thElements.length - 1).toString());
      this.renderer.setStyle(groupedTh, 'text-align', 'center');

      const text = this.renderer.createText(this.title);

      this.renderer.appendChild(groupedTh, text);
      this.renderer.appendChild(headerRow, groupedTh);
    }
  }

}
