import type { Meta, StoryObj } from '@storybook/angular';
import { DsButtonComponent } from './ds-button.component';
import { BUCKHOLT_ICONS } from '../icons/buckholt-icons';

/**
 * Story-only args type
 */
type ButtonStoryArgs = {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  label: string;
  iconClass?: string;
};

/**
 * Build readable dropdown options + mapping
 */
const ICON_OPTIONS = ['(none)', ...BUCKHOLT_ICONS.map(i => i.name)];

const ICON_MAPPING = Object.fromEntries([
  ['(none)', ''],
  ...BUCKHOLT_ICONS.map(i => [i.name, i.iconClass]),
]);

const meta: Meta<ButtonStoryArgs> = {
  title: 'Buckholt/Button',
  component: DsButtonComponent,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    iconClass: {
      name: 'Icon',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      mapping: ICON_MAPPING,
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
type Story = StoryObj<ButtonStoryArgs>;

/**
 * Stories (NO render function needed)
 */

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    label: 'Primary',
    iconClass: '(none)',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
    label: 'Secondary',
    iconClass: '(none)',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    disabled: false,
    label: 'Ghost',
    iconClass: '(none)',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    label: 'With Icon',
    iconClass: 'Temporary', // dropdown shows name, mapping converts to FA class
  },
};
