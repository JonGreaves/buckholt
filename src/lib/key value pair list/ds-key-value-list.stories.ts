import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsKeyValueListComponent,
  DsKeyValueListDirection,
  DsKeyValueListItem,
} from './ds-key-value-list.component';

type StoryArgs = {
  items: DsKeyValueListItem[];
  direction: DsKeyValueListDirection;
  stacked: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Buckholt/Key-value Pair - List',
  component: DsKeyValueListComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    items: { control: 'object' },
    direction: {
      control: 'select',
      options: ['column', 'row'],
    },
    stacked: { control: 'boolean' },
  },
  args: {
    items: [
      { key: 'Registration', value: 'BR82 DKR' },
      { key: 'Make', value: 'Hyundai' },
      { key: 'Cover type', value: 'Comprehensive' },
      { key: 'Annual mileage', value: '6,000' },
    ],
    direction: 'column',
    stacked: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        dsKeyValueList
        [items]="items"
        [direction]="direction"
        [stacked]="stacked">
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const RowDirection: Story = {
  args: {
    direction: 'row',
  },
};

export const Stacked: Story = {
  args: {
    stacked: true,
  },
};