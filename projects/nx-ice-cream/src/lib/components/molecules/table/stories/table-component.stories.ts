import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../table.component';
import { TableBasicDirective } from '../directives/table-basic.directive';
import { TableStyleCondensedDirective } from '../directives/table-style-condensed.directive';
import { TableColumn } from '../models/table-data.model';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface RegionRate {
    regiao: string;
    vlr_tarifa: number;
    vlr_iof: number;
    vrl_total_item: number
}

const meta: Meta<TableComponent<Product>> = {
    title: 'Componentes/Molecules/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [TableBasicDirective, TableStyleCondensedDirective]
        })
    ],
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object'},
        columns: { control: 'object'}
    },

};
export default meta;

type Story = StoryObj<TableComponent<Product>>;
type Story2 = StoryObj<TableComponent<RegionRate>>;

// História padrão
export const Default: Story = { 
    args: {
        data: [
            {id: 1, name: 'Laptop', price: 1200},
            {id: 2, name: 'Smartphone', price: 800},
            {id: 3, name: 'Tablet', price: 500},
        ] ,
        columns: [
            {key: 'id', label: "Código"},
            {key: 'name', label: "Nome"},
            {key: 'price', label: "Valor"},
        ]
    }
};

// História padrão
export const WithEditing: Story = { 
    args: {
        data: [
            {id: 1, name: 'Laptop', price: 1200},
            {id: 2, name: 'Smartphone', price: 800},
            {id: 3, name: 'Tablet', price: 500},
        ] ,
        columns: [
            {key: 'id', label: "Código", editTable: false},
            {key: 'name', label: "Nome", editTable: true},
            {key: 'price', label: "Valor", editTable: true},
        ]
    }
};

// História com a diretiva icmTableStyleBasic
export const WithDirectiveTableBasic: Story = {
    args: {
        data: [
            {id: 1, name: 'Laptop', price: 1200},
            {id: 2, name: 'Smartphone', price: 800},
            {id: 3, name: 'Tablet', price: 500},
        ] ,
        columns: [
            {key: 'id', label: "Código"},
            {key: 'name', label: "Nome"},
            {key: 'price', label: "Valor"},
        ]
    },
    render: (args) => ({
        props: args,
        template: `
            <icm-table
                [data]="data"
                [columns]="columns"
                icmTableBasic
            ></icm-table>
        `
    })
};

// História com a diretiva icmTableStyleCondensed
export const WithDirectiveTableStyleCondensed: Story2 = {
    args: {
        data: [
            {regiao: 'Sul', vlr_tarifa: 100, vlr_iof: 10, vrl_total_item: 110},
            {regiao: 'Note/Nordeste', vlr_tarifa: 100, vlr_iof: 10, vrl_total_item: 110},
            {regiao: 'Minas Gerais/GO', vlr_tarifa: 100, vlr_iof: 10, vrl_total_item: 110},
            {regiao: 'Rio de Janeiro/Espírito Santo/São Paulo', vlr_tarifa: 100, vlr_iof: 10, vrl_total_item: 110},

        ] ,
        columns: [
            {key: 'regiao', label: "Região", editTable: false},
            {key: 'vlr_tarifa', label: "Prêmio Tarifa", editTable: false},
            {key: 'vlr_iof', label: "IOF", editTable: false},
            {key: 'vrl_total_item', label: "Prêmio Total (Item)", editTable: false},
        ]
    },
    render: (args) => ({
        props: args,
        template: `
            <icm-table
                [data]="data"
                [columns]="columns"
                [icmTableStyleCondensed]="'Apartamento habitual'"
            ></icm-table>
        `
    })
};