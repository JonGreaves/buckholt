import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsKeyValueComponent,
  DsKeyValueExpressive,
  DsKeyValueSize,
} from './ds-key-value.component';

type StoryArgs = {
  keyText: string;
  valueText: string;
  stacked: boolean;
  flipped: boolean;
  size: DsKeyValueSize;
  expressive: DsKeyValueExpressive;
};

const meta: Meta<StoryArgs> = {
  title: 'Buckholt/Key-value Pair',
  component: DsKeyValueComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    keyText: { control: 'text' },
    valueText: { control: 'text' },
    stacked: { control: 'boolean' },
    flipped: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['md', 'xs', 'sm', 'lg', 'xl', 'display'],
    },
    expressive: {
      control: 'select',
      options: [false, 'primary', 'secondary', 'tertiary', 'quaternary'],
    },
  },
  args: {
    keyText: 'Email',
    valueText: 'email@address.co.uk',
    stacked: false,
    flipped: false,
    size: 'md',
    expressive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        dsKeyValue
        [keyText]="keyText"
        [valueText]="valueText"
        [stacked]="stacked"
        [flipped]="flipped"
        [size]="size"
        [expressive]="expressive">
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Stacked: Story = {
  args: {
    keyText: 'Total',
    valueText: '£350',
    stacked: true,
  },
};

export const Flipped: Story = {
  args: {
    keyText: 'Key',
    valueText: 'Value',
    stacked: true,
    flipped: true,
  },
};

export const Expressive: Story = {
  args: {
    keyText: 'Key',
    valueText: 'Primary',
    expressive: 'primary',
  },
};

export const Display: Story = {
  args: {
    keyText: 'Key',
    valueText: 'Display',
    stacked: true,
    size: 'display',
  },
};