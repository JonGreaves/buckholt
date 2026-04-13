import type { Meta, StoryObj } from '@storybook/angular';
import { DsListComponent, DsListItem } from './ds-list.component';

function formatValue(value: unknown, indent = 2): string {
  const spacing = ' '.repeat(indent);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]';
    }

    const items = value
      .map((item) => `${spacing}${formatValue(item, indent + 2)}`)
      .join(',\n');

    return `[\n${items}\n${' '.repeat(indent - 2)}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, entryValue]) => entryValue !== undefined)
      .map(
        ([key, entryValue]) =>
          `${spacing}${key}: ${formatValue(entryValue, indent + 2)}`
      )
      .join(',\n');

    return `{\n${entries}\n${' '.repeat(indent - 2)}}`;
  }

  if (typeof value === 'string') {
    return `'${value.replace(/'/g, "\\'")}'`;
  }

  return String(value);
}

function buildAngularSnippet(args: {
  variant: 'unordered' | 'ordered';
  unstyled: boolean;
  items: DsListItem[];
}): string {
  return `import { Component } from '@angular/core';
import { DsListComponent, DsListItem } from './ds-list.component';

@Component({
  selector: 'storybook-example',
  standalone: true,
  imports: [DsListComponent],
  template: \`
    <ds-list
      [variant]="variant"
      [unstyled]="unstyled"
      [items]="items">
    </ds-list>
  \`,
})
export class StorybookExampleComponent {
  protected readonly variant: 'unordered' | 'ordered' = '${args.variant}';
  protected readonly unstyled = ${args.unstyled};
  protected readonly items: DsListItem[] = ${formatValue(args.items, 4)};
}`;
}

const meta: Meta<DsListComponent> = {
  title: 'Buckholt/List',
  component: DsListComponent,
  tags: ['autodocs'],
  args: {
    variant: 'unordered',
    unstyled: false,
    items: [
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['unordered', 'ordered'],
    },
    unstyled: {
      control: 'boolean',
    },
    items: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: { variant: 'unordered' | 'ordered'; unstyled: boolean; items: DsListItem[] } }) =>
          buildAngularSnippet(context.args),
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsListComponent>;

export const Unordered: Story = {
  args: {
    variant: 'unordered',
    unstyled: false,
    items: [
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};

export const Ordered: Story = {
  args: {
    variant: 'ordered',
    unstyled: false,
    items: [
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};

export const WithHeading: Story = {
  args: {
    variant: 'unordered',
    unstyled: false,
    items: [
      { text: 'List heading', isHeading: true },
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};

export const OrderedWithHeading: Story = {
  args: {
    variant: 'ordered',
    unstyled: false,
    items: [
      { text: 'List heading', isHeading: true },
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};

export const Unstyled: Story = {
  args: {
    variant: 'unordered',
    unstyled: true,
    items: [
      { text: 'List heading', isHeading: true },
      { text: 'List item' },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'unordered',
    unstyled: false,
    items: [
      { text: 'List heading', isHeading: true },
      {
        text: 'List item',
        icon: 'fa-solid fa-circle-check',
        iconClass: 'text-success',
      },
      {
        text: 'List item',
        icon: 'fa-solid fa-circle-check',
        iconClass: 'text-success',
      },
      {
        text: 'List item',
        icon: 'fa-solid fa-circle-exclamation',
        iconClass: 'text-error',
      },
    ],
  },
};

export const Nested: Story = {
  args: {
    variant: 'unordered',
    unstyled: false,
    items: [
      {
        text: 'List item',
        children: [
          { text: 'Level 2 item' },
          { text: 'Level 2 item' },
        ],
      },
      { text: 'List item' },
      { text: 'List item' },
    ],
  },
};