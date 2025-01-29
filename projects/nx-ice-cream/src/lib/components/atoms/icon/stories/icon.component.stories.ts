import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from '../icon.component';

const meta: Meta<IconComponent> = {
    title: 'Componentes/Atoms/Icon',
    component: IconComponent,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: [
                'house',
                'bell',
                'gear',
                'star',
                'chat-dots',
                'envelope',
                'person',
                'cloud',
                'check-cirble',
                'camera',
                'heart',
                'cart',
                'trash',
                'pencil',
                'lock',
                'funnel-fill'
            ]
        },
        size: { control: 'text' },
        color: { control: 'color' },
    }
};
export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
    args: {
        name: 'house',
        color: 'black'
    }
};

export const AllIcons: Story = {
    render: () => ({
        props: {
            name: ''
        },
        template: `
        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        ${meta.argTypes?.name?.options?.map((icon) => `<icm-icon name="${icon}" size="2rem" color="blue"></icm-icon>`)
                .join('')}
            
        </div>
        `,
    }),
}