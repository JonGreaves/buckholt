import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Example/Button (HTML)',
};

export default meta;

type Story = StoryObj;

export const Base: Story = {
  render: () => ({
    template: `
      <button type="button" class="btn">
        <span class="button-label">Button label</span>
      </button>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div class="button-set">
        <button type="button" class="btn btn-primary">
          <span class="button-label">Primary</span>
        </button>

        <button type="button" class="btn btn-secondary">
          <span class="button-label">Secondary</span>
        </button>

        <button type="button" class="btn btn-ghost">
          <span class="button-label">Ghost</span>
        </button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="button-set">
        <button type="button" class="btn btn-primary btn-sm">
          <span class="button-label">Small</span>
        </button>

        <button type="button" class="btn btn-primary">
          <span class="button-label">Medium</span>
        </button>

        <button type="button" class="btn btn-primary btn-lg">
          <span class="button-label">Large</span>
        </button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div class="button-set">
        <button type="button" class="btn btn-primary" disabled>
          <span class="button-label">Primary</span>
        </button>

        <button type="button" class="btn btn-secondary" disabled>
          <span class="button-label">Secondary</span>
        </button>

        <button type="button" class="btn btn-ghost" disabled>
          <span class="button-label">Ghost</span>
        </button>
      </div>
    `,
  }),
};
