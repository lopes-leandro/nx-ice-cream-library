import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from '../table.component';
import { TableColumn } from '../models/table-data.model';

interface Product {
    id: number;
    name: string;
    price: number;
}

const meta: Meta<TableComponent<Product>> = {
    title: 'Componentes/Molecules/Table',
    component: TableComponent,
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object'},
        columns: { control: 'object'}
    }
};
export default meta;

type Story = StoryObj<TableComponent<Product>>;

// História padrão
export const Default: Story = {
    args: {
        data: [
            {id: 1, name: 'Laptop', price: 1200},
            {id: 2, name: 'Smartphone', price: 800},
            {id: 3, name: 'Tablet', price: 500},
        ],
        columns: [
            {key: 'id', label: "Código"},
            {key: 'name', label: "Nome", editTable: true},
            {key: 'price', label: "Valor", editTable: true},
        ]
    }
};