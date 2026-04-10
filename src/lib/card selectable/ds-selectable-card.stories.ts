import type { Meta, StoryObj } from '@storybook/angular';
import { DsSelectableCardComponent } from './ds-selectable-card.component';

const meta: Meta<DsSelectableCardComponent> = {
  title: 'Buckholt/Card - Selectable',
  component: DsSelectableCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    selectionType: {
      control: 'select',
      options: ['radio', 'checkbox'],
    },
    checked: {
      control: 'boolean',
    },
  },
  args: {
    selectionType: 'radio',
    inputId: 'radio-selectablecard',
    name: 'selectable',
    value: '',
    checked: false,
    title: 'Single select card title',
    body: 'Duis non quam et nisi tincidunt fermentum. Pellentesque habitant morbi tristique senectus.',
  },
};

export default meta;
type Story = StoryObj<DsSelectableCardComponent>;

export const SingleSelect: Story = {};

export const SingleSelectChecked: Story = {
  args: {
    checked: true,
  },
};

export const MultiSelect: Story = {
  args: {
    selectionType: 'checkbox',
    inputId: 'checkbox-selectablecard2',
    title: 'Multi select card title',
  },
};

export const MultiSelectChecked: Story = {
  args: {
    selectionType: 'checkbox',
    inputId: 'checkbox-selectablecard2',
    title: 'Multi select card title',
    checked: true,
  },
};