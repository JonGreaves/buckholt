import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsPageNavigationComponent,
  DsPageNavigationItem,
} from './ds-page-navigation.component';

type StoryArgs = {
  items: DsPageNavigationItem[];
};

function escapeSingleQuotes(value: string): string {
  return value.replace(/'/g, "\\'");
}

function buildItemsLiteral(items: DsPageNavigationItem[]): string {
  const lines = items.map((item) => {
    const fields: string[] = [
      `label: '${escapeSingleQuotes(item.label)}'`,
      `href: '${escapeSingleQuotes(item.href)}'`,
    ];

    if (item.active) {
      fields.push('active: true');
    }

    if (item.iconClass) {
      fields.push(`iconClass: '${escapeSingleQuotes(item.iconClass)}'`);
    }

    return `  { ${fields.join(', ')} }`;
  });

  return `[\n${lines.join(',\n')}\n]`;
}

function buildAngularUsage(args: StoryArgs): string {
  return `<ul
  ds-page-navigation
  [items]="${buildItemsLiteral(args.items)}">
</ul>`;
}

const meta: Meta<DsPageNavigationComponent & StoryArgs> = {
  title: 'Buckholt/Page navigation',
  component: DsPageNavigationComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (_source: string, context: { args: StoryArgs }) =>
          buildAngularUsage(context.args),
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Page navigation items rendered as Buckholt nav-item/nav-link markup.',
    },
  },
  render: (args: StoryArgs) => ({
    props: args,
    template: `<ul ds-page-navigation [items]="items"></ul>`,
  }),
};

export default meta;

type Story = StoryObj<DsPageNavigationComponent & StoryArgs>;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        href: '#',
        active: true,
      },
      {
        label: 'Summary',
        href: '#',
      },
      {
        label: 'Documents',
        href: '#',
      },
      {
        label: 'Make changes',
        href: '#',
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
        href: '#',
        active: true,
        iconClass: 'fa-regular fa-ghost',
      },
      {
        label: 'Summary',
        href: '#',
        iconClass: 'fa-regular fa-file-lines',
      },
      {
        label: 'Documents',
        href: '#',
        iconClass: 'fa-regular fa-folder-open',
      },
      {
        label: 'Make changes',
        href: '#',
        iconClass: 'fa-regular fa-pen-to-square',
      },
    ],
  },
};