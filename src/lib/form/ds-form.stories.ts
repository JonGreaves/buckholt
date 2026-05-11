import type { Meta, StoryObj } from '@storybook/angular';
import { DsFormComponent } from './ds-form.component';

const meta: Meta<DsFormComponent> = {
  title: 'Buckholt/Form',
  component: DsFormComponent,
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
      description: 'Sets the id attribute on the form element.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Sets aria-label on the form element.',
    },
    ariaLabelledby: {
      control: 'text',
      description: 'Sets aria-labelledby on the form element.',
    },
  },
};

export default meta;

type Story = StoryObj<DsFormComponent>;

export const Default: Story = {
  args: {
    id: 'formExample',
  },
  parameters: {
    docs: {
      source: {
        code: `<ds-form id="formExample">
  <div class="text-block">
    <h3 class="headline-03">Contact details</h3>
  </div>

  <div class="form-body">
    <!-- Buckholt input components go here -->
  </div>

  <div class="form-actions">
    <!-- Buckholt button/link components go here -->
  </div>
</ds-form>`,
      },
    },
  },
};

export const WithMultipleSections: Story = {
  args: {
    id: 'formSectionsExample',
  },
  parameters: {
    docs: {
      source: {
        code: `<ds-form id="formSectionsExample">
  <div class="text-block">
    <h3 class="headline-03">Contact details</h3>
  </div>

  <div class="form-body">
    <div class="text-block">
      <h4 class="headline-01">Personal details</h4>
      <p>Tell us who you are.</p>
    </div>

    <!-- Buckholt input components go here -->
  </div>

  <div class="form-body">
    <div class="text-block">
      <h4 class="headline-01">Preferences</h4>
      <p>Tell us how you would like to be contacted.</p>
    </div>

    <!-- Buckholt input components go here -->
  </div>

  <div class="form-actions">
    <!-- Buckholt button/link components go here -->
  </div>
</ds-form>`,
      },
    },
  },
};