import type { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from './ds-card.component';

type CardStoryArgs = {
  variant: 'base' | 'clickable' | 'selectable-radio' | 'selectable-checkbox';
  style: 'default' | 'secondary';
  size: 'default' | 'large';
  imagePosition: 'none' | 'top' | 'left' | 'right';
  href: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  inputId: string;
  inputValue: string;
  checked: boolean;
};

const meta: Meta<CardStoryArgs> = {
  title: 'Buckholt/Card',
  component: DsCardComponent,
  tags: ['autodocs'],
  args: {
    variant: 'base',
    style: 'default',
    size: 'default',
    imagePosition: 'none',
    href: '#',
    imgSrc: '',
    imgAlt: '',
    name: 'selectable',
    inputId: 'card-selectable',
    inputValue: '',
    checked: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'clickable', 'selectable-radio', 'selectable-checkbox'],
    },
    style: {
      control: 'select',
      options: ['default', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
    },
    imagePosition: {
      control: 'select',
      options: ['none', 'top', 'left', 'right'],
    },
    href: { control: 'text' },
    imgSrc: { control: 'text' },
    imgAlt: { control: 'text' },
    name: { control: 'text' },
    inputId: { control: 'text' },
    inputValue: { control: 'text' },
    checked: { control: 'boolean' },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardStoryArgs>;

export const Base: Story = {};

export const Clickable: Story = {
  args: {
    variant: 'clickable',
  },
};

export const SelectableRadio: Story = {
  args: {
    variant: 'selectable-radio',
    name: 'selectable-group',
  },
};

export const SelectableCheckbox: Story = {
  args: {
    variant: 'selectable-checkbox',
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const ImageTop: Story = {
  args: {
    imagePosition: 'top',
    imgSrc: 'https://picsum.photos/640/360',
    imgAlt: 'Card image',
  },
};

export const ImageLeft: Story = {
  args: {
    imagePosition: 'left',
    imgSrc: 'https://picsum.photos/640/360',
    imgAlt: 'Card image',
  },
};

export const ImageRight: Story = {
  args: {
    imagePosition: 'right',
    imgSrc: 'https://picsum.photos/640/360',
    imgAlt: 'Card image',
  },
};