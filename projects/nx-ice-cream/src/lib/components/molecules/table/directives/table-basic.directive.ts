import { AfterViewInit, Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[icmTableBasic]',
  standalone: true
})
export class TableBasicDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.applyStyle();
  }

  applyStyle(): void {
    const table = this.el.nativeElement.querySelector('table');
    if (table) {
      this.renderer.addClass(table, 'table-style-base');
    }
  }

}
