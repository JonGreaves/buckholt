import type { Meta, StoryObj } from '@storybook/angular';

import { DsSliderComponent } from './ds-slider.component';

const meta: Meta<DsSliderComponent> = {
  title: 'Buckholt/Slider',
  component: DsSliderComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    assistiveText: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    value: {
      control: 'number',
    },
    showNumberInput: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    tickCount: {
      control: {
        type: 'number',
        min: 0,
        max: 12,
        step: 1,
      },
    },
    valueChange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: 'slider-example',
    label: 'Slider label text',
    assistiveText: '',
    helperText: '',
    errorMessage: '',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showNumberInput: true,
    disabled: false,
    readonly: false,
    tickCount: 5,
  },
};

export default meta;

type Story = StoryObj<DsSliderComponent>;

export const Default: Story = {};

export const WithAssistiveAndHelperText: Story = {
  args: {
    id: 'slider-example-support',
    label: 'Slider support text example',
    assistiveText: 'Assistive text',
    helperText: 'Helper text',
  },
};

export const WithoutNumberInput: Story = {
  args: {
    id: 'slider-example-nonum',
    label: 'Slider output example',
    showNumberInput: false,
  },
};

export const Error: Story = {
  args: {
    id: 'slider-example-error',
    label: 'Slider error example',
    helperText: 'Helper text',
    errorMessage: 'Validation error message',
  },
};

export const Disabled: Story = {
  args: {
    id: 'slider-example-disabled',
    label: 'Slider disabled example',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'slider-example-readonly',
    label: 'Slider read-only example',
    readonly: true,
  },
};