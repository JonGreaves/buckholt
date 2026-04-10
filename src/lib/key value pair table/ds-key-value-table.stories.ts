import type { Meta, StoryObj } from '@storybook/angular';
import { DsKeyValueTableComponent, DsKeyValueTableItem } from './ds-key-value-table.component';

type StoryArgs = {
  items: DsKeyValueTableItem[];
  dividers: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Buckholt/Key-value Pair - Table',
  component: DsKeyValueTableComponent,
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
    dividers: { control: 'boolean' },
  },
  args: {
    items: [
      { key: 'Name', value: 'Rick Deckard' },
      { key: 'Date of birth', value: '23rd January 1986' },
      { key: 'Address', value: '15 Medley Road, Rayne, Essex CM77 6TQ' },
      { key: 'Email address', value: 'email@address.com' },
    ],
    dividers: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        dsKeyValueTable
        [items]="items"
        [dividers]="dividers">
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const WithDividers: Story = {
  args: {
    dividers: true,
  },
};