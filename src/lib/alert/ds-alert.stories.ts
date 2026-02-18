import type { Meta, StoryObj } from '@storybook/angular';
import { DsAlertComponent } from './ds-alert.component';
import { BUCKHOLT_ICONS } from '../icons/buckholt-icons';

type AlertStoryArgs = {
  variant: 'info' | 'success' | 'warning' | 'error';
  message: string;
  note?: string;
  noteSmall?: string;
  iconClass?: string;
  dismissible: boolean;
};

const ICON_OPTIONS = ['(none)', ...BUCKHOLT_ICONS.map(i => i.name)];

const ICON_MAPPING = Object.fromEntries([
  ['(none)', ''],
  ...BUCKHOLT_ICONS.map(i => [i.name, i.iconClass]),
]);

const meta: Meta<AlertStoryArgs> = {
  title: 'Buckholt/Alert',
  component: DsAlertComponent,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
    note: { control: 'text' },
    noteSmall: { control: 'text' },
    dismissible: { control: 'boolean' },
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
type Story = StoryObj<AlertStoryArgs>;

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational alert.',
    note: '',
    noteSmall: '',
    iconClass: '(none)',
    dismissible: false,
  },
};

export const WithNote: Story = {
  args: {
    variant: 'success',
    message: 'Changes saved successfully.',
    note: 'Your settings have been updated.',
    noteSmall: '',
    iconClass: '(none)',
    dismissible: false,
  },
};

export const WithSmallNote: Story = {
  args: {
    variant: 'warning',
    message: 'Please review your inputs.',
    note: '',
    noteSmall: 'Fields marked * are required.',
    iconClass: '(none)',
    dismissible: false,
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'error',
    message: 'Something went wrong.',
    note: '',
    noteSmall: '',
    iconClass: '(none)',
    dismissible: true,
  },
};

