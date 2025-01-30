import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

interface Product {id: number; name: string;}

describe('TableComponent', () => {
  let component: TableComponent<Product>;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent<Product>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
