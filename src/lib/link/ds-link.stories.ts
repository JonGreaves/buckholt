import type { Meta, StoryObj } from '@storybook/angular';
import { DsLinkComponent } from './ds-link.component';
import { BUCKHOLT_ICONS } from '../icons/buckholt-icons';

type LinkStoryArgs = {
  href: string;
  text: string;
  type: 'inline' | 'standalone' | 'standalone-icon';
  iconClass?: string;
  external: boolean;
};

/**
 * Build readable dropdown options + mapping
 */
const ICON_OPTIONS = ['(none)', ...BUCKHOLT_ICONS.map(i => i.name)];

const ICON_MAPPING = Object.fromEntries([
  ['(none)', ''],
  ...BUCKHOLT_ICONS.map(i => [i.name, i.iconClass]),
]);

const meta: Meta<LinkStoryArgs> = {
  title: 'Buckholt/Link',
  component: DsLinkComponent,
  tags: ['autodocs'],

  argTypes: {
    href: { control: 'text' },
    text: { control: 'text' },

    type: {
      control: 'radio',
      options: ['inline', 'standalone', 'standalone-icon'],
    },

    iconClass: {
      name: 'Icon',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      mapping: ICON_MAPPING,
    },

    external: { control: 'boolean' },
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
type Story = StoryObj<LinkStoryArgs>;

export const Inline: Story = {
  args: {
    href: '#',
    text: 'Inline link',
    type: 'inline',
    iconClass: '(none)', // ignored by component because inline
    external: false,
  },
};

export const Standalone: Story = {
  args: {
    href: '#',
    text: 'Standalone link',
    type: 'standalone',
    iconClass: '(none)',
    external: false,
  },
};

export const StandaloneWithIcon: Story = {
  args: {
    href: '#',
    text: 'Standalone with icon',
    type: 'standalone-icon',
    iconClass: 'Temporary', // dropdown shows name; mapping converts to FA class
    external: false,
  },
};

export const ExternalStandaloneWithIcon: Story = {
  args: {
    href: 'https://example.com',
    text: 'External standalone link',
    type: 'standalone-icon',
    iconClass: 'Temporary',
    external: true,
  },
};
