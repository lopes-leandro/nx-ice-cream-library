import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableColumn } from './models/table-data.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'icm-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T extends object> {

  @Input() data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];

  protected editing: { rowIndex: number, columnKey: keyof T } | null = null;

  onEdit(rowIndex: number, columnKey: keyof T): void {
    this.editing = { rowIndex, columnKey };
  }

  onSave(form: NgForm, rowIndex: number, columnKey: keyof T): void {
    if (form.invalid) return;

    const newValue = form.value[columnKey];

    const updateRow = { ...this.data[rowIndex], [columnKey]: newValue };
    const updateData = [ ...this.data];

    updateData[rowIndex] = updateRow;

    this.data = updateData;
    console.log(updateRow);
    this.editing = null;

  }

  convertString(columnKey: keyof T): string {
    return columnKey as string;
  }
}
