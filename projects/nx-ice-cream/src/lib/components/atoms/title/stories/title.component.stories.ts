import type { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from '../title.component';
import { Tag } from '../models/tag.enum';

const meta: Meta<TitleComponent> = {
    title: 'Componentes/Atoms/Title',
    component: TitleComponent,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text'},
        tag: { control: 'radio', options: Object.values(Tag)}
    }
};
export default meta;

type Story = StoryObj<TitleComponent>;

export const Default: Story = {
    args: {
        title: 'Title',
        tag: Tag.H1
    }
};