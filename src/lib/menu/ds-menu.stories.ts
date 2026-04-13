import type { Meta, StoryObj } from '@storybook/angular';
import {
  DsMenuComponent,
  type DsMenuItem,
} from './ds-menu.component';

const basicItems: DsMenuItem[] = [
  { type: 'action', label: 'Action' },
  { type: 'action', label: 'Another action' },
  { type: 'action', label: 'Something else here' },
];

const groupedItems: DsMenuItem[] = [
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
  {
    type: 'action',
    label: 'Logout',
    iconClass: 'fa-regular fa-arrow-right-from-bracket',
    danger: true,
  },
];

const selectableSubmenuItems: DsMenuItem[] = [
  {
    type: 'submenu',
    label: 'Single select',
    items: [
      {
        type: 'selectable',
        label: 'Option 1',
        selectionType: 'single',
        checked: false,
      },
      {
        type: 'selectable',
        label: 'Option 2',
        selectionType: 'single',
        checked: true,
      },
      {
        type: 'selectable',
        label: 'Option 3',
        selectionType: 'single',
        checked: false,
      },
    ],
  },
  { type: 'divider' },
  {
    type: 'submenu',
    label: 'Multi select',
    items: [
      {
        type: 'selectable',
        label: 'Option 1',
        selectionType: 'multiple',
        checked: false,
      },
      {
        type: 'selectable',
        label: 'Option 2',
        selectionType: 'multiple',
        checked: true,
      },
      {
        type: 'selectable',
        label: 'Option 3',
        selectionType: 'multiple',
        checked: false,
      },
    ],
  },
];

const iconAndDangerItems: DsMenuItem[] = [
  {
    type: 'action',
    label: 'Edit',
    iconClass: 'fa-regular fa-pencil',
  },
  {
    type: 'action',
    label: 'Copy',
    iconClass: 'fa-regular fa-copy',
  },
  {
    type: 'action',
    label: 'Export',
    iconClass: 'fa-regular fa-file-export',
  },
  { type: 'divider' },
  {
    type: 'action',
    label: 'Delete',
    iconClass: 'fa-regular fa-trash-can',
    danger: true,
  },
];

const meta: Meta<DsMenuComponent> = {
  title: 'Components/Menu',
  component: DsMenuComponent,
  tags: ['autodocs'],
  args: {
    items: basicItems,
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Typed menu structure matching Buckholt menu item patterns.',
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

type Story = StoryObj<DsMenuComponent>;

export const Basic: Story = {
  args: {
    items: basicItems,
  },
};

export const Grouped: Story = {
  args: {
    items: groupedItems,
  },
};

export const SelectableSubmenus: Story = {
  args: {
    items: selectableSubmenuItems,
  },
};

export const IconsAndDanger: Story = {
  args: {
    items: iconAndDangerItems,
  },
};