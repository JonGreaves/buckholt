import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DsButtonComponent } from './ds-button.component';
import { DsButtonIconDirective } from './ds-button-icon.directive';

const meta: Meta<DsButtonComponent> = {
  title: 'Buckholt/Button (Angular)',
  component: DsButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [DsButtonIconDirective],
    }),
  ],
};

export default meta;
type Story = StoryObj<DsButtonComponent>;


export const Primary: Story = {
  args: { variant: 'primary', size: 'md', disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant" [size]="size" [disabled]="disabled">
        <span class="button-label">Primary</span>
      </ds-button>
    `,
  }),
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant">
        <span class="button-label">Secondary</span>
      </ds-button>
    `,
  }),
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant">
        <span class="button-label">Ghost</span>
      </ds-button>
    `,
  }),
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant" [size]="size">
        <span class="button-label">Small</span>
      </ds-button>
    `,
  }),
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant" [size]="size">
        <span class="button-label">Large</span>
      </ds-button>
    `,
  }),
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: (args) => ({
    props: args,
    template: `
      <ds-button [variant]="variant" [disabled]="disabled">
        <span class="button-label">Disabled</span>
      </ds-button>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    template: `
      <ds-button variant="primary">
        <ng-template dsButtonIcon>
          <i class="fa-regular fa-ghost"></i>
        </ng-template>

        <span class="button-label">With icon</span>
      </ds-button>
    `,
  }),
};
