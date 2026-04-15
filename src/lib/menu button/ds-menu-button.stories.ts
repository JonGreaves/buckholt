import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsMenuButtonComponent,
  type DsMenuButtonItem,
} from './ds-menu-button.component';
import { DsComboButtonComponent } from './ds-combo-button.component';
import { DsOverflowMenuButtonComponent } from './ds-overflow-menu-button.component';

const basicItems: DsMenuButtonItem[] = [
  { type: 'action', label: 'Action' },
  { type: 'action', label: 'Another action' },
  { type: 'action', label: 'Something else here' },
];

const actionsItems: DsMenuButtonItem[] = [
  { type: 'header', label: 'My summary' },
  { type: 'action', label: 'Account information' },
  {
    type: 'submenu',
    label: 'Share',
    items: [
      { type: 'action', label: 'Email' },
      { type: 'action', label: 'Message' },
    ],
  },
  { type: 'divider' },
  { type: 'link', label: 'Terms of service', href: '#' },
  { type: 'link', label: 'Privacy policy', href: '#' },
  { type: 'divider' },
  { type: 'action', label: 'Logout', danger: true },
];

const meta: Meta<DsMenuButtonComponent> = {
  title: 'Buckholt/Menu Button',
  component: DsMenuButtonComponent,
  tags: ['autodocs'],
  args: {
    label: 'Menu button',
    style: 'primary',
    items: basicItems,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    style: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    items: {
      control: 'object',
    },
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

type Story = StoryObj<DsMenuButtonComponent>;

export const MenuButtonPrimary: Story = {
  args: {
    label: 'Menu button',
    style: 'primary',
    items: basicItems,
  },
};

export const MenuButtonSecondary: Story = {
  args: {
    label: 'Menu button',
    style: 'secondary',
    items: basicItems,
  },
};

export const MenuButtonGhost: Story = {
  args: {
    label: 'Menu button',
    style: 'ghost',
    items: basicItems,
  },
};

export const MenuButtonRichMenu: Story = {
  args: {
    label: 'Actions',
    style: 'primary',
    items: actionsItems,
  },
};

export const ComboButton: StoryObj<DsComboButtonComponent> = {
  render: (args) => ({
    props: args,
    component: DsComboButtonComponent,
  }),
  args: {
    label: 'Combo',
    style: 'primary',
    items: basicItems,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    style: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    items: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export const OverflowMenu: StoryObj<DsOverflowMenuButtonComponent> = {
  render: (args) => ({
    props: args,
    component: DsOverflowMenuButtonComponent,
  }),
  args: {
    items: basicItems,
  },
  argTypes: {
    items: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};