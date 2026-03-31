import type { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from './ds-card.component';
import { DsLinkComponent } from '../link/ds-link.component';

type CardStoryArgs = {
  layout: 'default' | 'horizontal' | 'horizontal-right';
  size: 'default' | 'lg';
  variant:
    | 'default'
    | 'clickable'
    | 'selectable-radio'
    | 'selectable-checkbox';
  imgSrc?: string;
  imgAlt?: string;
  href?: string;
  name?: string;
  value?: string;
  checked: boolean;
};

const meta: Meta<CardStoryArgs> = {
  title: 'Buckholt/Card',
  component: DsCardComponent,
  tags: ['autodocs'],

  argTypes: {
    layout: {
      control: 'radio',
      options: ['default', 'horizontal', 'horizontal-right'],
    },
    size: {
      control: 'radio',
      options: ['default', 'lg'],
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'clickable',
        'selectable-radio',
        'selectable-checkbox',
      ],
    },
    imgSrc: { control: 'text' },
    imgAlt: { control: 'text' },
    href: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
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


const renderCard = (args: CardStoryArgs) => ({
  props: args,
  imports: [DsCardComponent, DsLinkComponent],
  template: `
    <ds-card
      [layout]="layout"
      [size]="size"
      [variant]="variant"
      [imgSrc]="imgSrc"
      [imgAlt]="imgAlt"
      [href]="href"
      [name]="name"
      [value]="value"
      [checked]="checked"
    >

      <div class="text-block">
        <h4 class="title-03">Card title</h4>
        <p>
          This is an example of Buckholt card content.
          It follows the documented structure.
        </p>
      </div>

      <ds-link
        type="inline"
        href="#"
        text="Learn more"
      ></ds-link>

    </ds-card>
  `,
});


export const Default: Story = {
  render: renderCard,
  args: {
    layout: 'default',
    size: 'default',
    variant: 'default',
    imgSrc: '',
    imgAlt: '',
    href: '#',
    name: 'example',
    value: '1',
    checked: false,
  },
};

export const Large: Story = {
  render: renderCard,
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const WithImage: Story = {
  render: renderCard,
  args: {
    ...Default.args,
    imgSrc: 'https://via.placeholder.com/600x300',
    imgAlt: 'Example image',
  },
};

export const Horizontal: Story = {
  render: renderCard,
  args: {
    ...WithImage.args,
    layout: 'horizontal',
  },
};

export const HorizontalRight: Story = {
  render: renderCard,
  args: {
    ...WithImage.args,
    layout: 'horizontal-right',
  },
};

export const Clickable: Story = {
  render: renderCard,
  args: {
    ...Default.args,
    variant: 'clickable',
    href: '#',
  },
};

export const SelectableRadio: Story = {
  render: renderCard,
  args: {
    ...Default.args,
    variant: 'selectable-radio',
    name: 'selectable',
    value: 'card-1',
  },
};

export const SelectableCheckbox: Story = {
  render: renderCard,
  args: {
    ...Default.args,
    variant: 'selectable-checkbox',
    name: 'selectable',
    value: 'card-1',
  },
};
