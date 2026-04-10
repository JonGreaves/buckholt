import type { Meta, StoryObj } from '@storybook/angular';
import { DsKeyValueGridComponent, DsKeyValueGridItem } from './ds-key-value-grid.component';

type StoryArgs = {
  items: DsKeyValueGridItem[];
  columns: number;
};

const meta: Meta<StoryArgs> = {
  title: 'Buckholt/Key-value Pair - Grid',
  component: DsKeyValueGridComponent,
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
    columns: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
    },
  },
  args: {
    items: [
      { key: 'Category', value: 'Formatting' },
      { key: 'FA name', value: 'trash-can' },
      { key: 'Unicode', value: 'f2ed' },
      { key: 'Style', value: 'regular' },
    ],
    columns: 3,
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        dsKeyValueGrid
        [items]="items"
        [columns]="columns">
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};