import type { Meta, StoryObj } from '@storybook/angular';
import { DsInputRowComponent } from './ds-input-row.component';

const meta: Meta<DsInputRowComponent> = {
  title: 'Buckholt/Input Row',
  component: DsInputRowComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

export default meta;

type Story = StoryObj<DsInputRowComponent>;

export const EqualWidth: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <ds-input-row>
        <div class="col">
          <div class="input">
            <label for="first-name">First name</label>
            <input id="first-name" type="text" />
          </div>
        </div>
        <div class="col">
          <div class="input">
            <label for="last-name">Last name</label>
            <input id="last-name" type="text" />
          </div>
        </div>
      </ds-input-row>
    `,
  }),
};

export const CustomWidth: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <ds-input-row>
        <div class="col">
          <div class="input">
            <label for="card-number">Card number</label>
            <input id="card-number" type="text" />
          </div>
        </div>
        <div class="col-4">
          <div class="input">
            <label for="security-code">Security code</label>
            <input id="security-code" type="text" />
          </div>
        </div>
      </ds-input-row>
    `,
  }),
};