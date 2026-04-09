import type { Meta, StoryObj } from '@storybook/angular';
import { DsHeadingAttachmentComponent } from './ds-heading-attachment.component';

const meta: Meta<DsHeadingAttachmentComponent> = {
  title: 'Buckholt/Heading Attachment',
  component: DsHeadingAttachmentComponent,
  tags: ['autodocs'],
  args: {
    heading: 'Heading text',
    headingClass: 'headline-02',
    body: 'Body text',
    eyebrow: '',
    inlineIconClass: '',
    iconBlockIconClass: '',
    iconBlockIsXl: false,
    attachmentType: 'close',
    closeAriaLabel: 'Close',
    linkLabel: 'View more',
    linkHref: '#',
    linkTarget: '_self',
    linkIconClass: 'fa-regular fa-arrow-right',
    tagLabel: 'Tag label',
  },
  argTypes: {
    heading: {
      control: 'text',
    },
    headingClass: {
      control: 'select',
      options: ['headline-02', 'title-03'],
    },
    body: {
      control: 'text',
    },
    eyebrow: {
      control: 'text',
    },
    inlineIconClass: {
      control: 'text',
    },
    iconBlockIconClass: {
      control: 'text',
    },
    iconBlockIsXl: {
      control: 'boolean',
    },
    attachmentType: {
      control: 'select',
      options: ['none', 'close', 'link', 'tag'],
    },
    closeAriaLabel: {
      control: 'text',
      if: { arg: 'attachmentType', eq: 'close' },
    },
    linkLabel: {
      control: 'text',
      if: { arg: 'attachmentType', eq: 'link' },
    },
    linkHref: {
      control: 'text',
      if: { arg: 'attachmentType', eq: 'link' },
    },
    linkTarget: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      if: { arg: 'attachmentType', eq: 'link' },
    },
    linkIconClass: {
      control: 'text',
      if: { arg: 'attachmentType', eq: 'link' },
    },
    tagLabel: {
      control: 'text',
      if: { arg: 'attachmentType', eq: 'tag' },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component:
          'Buckholt heading attachment pattern implemented as a standalone Angular component with exact documented attachment types and optional supporting elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<DsHeadingAttachmentComponent>;

export const CloseButton: Story = {
  args: {
    attachmentType: 'close',
    headingClass: 'headline-02',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    eyebrow: '',
    inlineIconClass: '',
    iconBlockIconClass: '',
    iconBlockIsXl: false,
  },
};

export const StandaloneLink: Story = {
  args: {
    attachmentType: 'link',
    headingClass: 'headline-02',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    linkLabel: 'View more',
    linkHref: '#',
    linkTarget: '_self',
    linkIconClass: 'fa-regular fa-arrow-right',
  },
};

export const TagAttachment: Story = {
  args: {
    attachmentType: 'tag',
    headingClass: 'headline-02',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    tagLabel: 'Tag label',
  },
};

export const WithEyebrow: Story = {
  args: {
    attachmentType: 'close',
    headingClass: 'headline-02',
    eyebrow: 'Eyebrow text',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
  },
};

export const WithInlineIcon: Story = {
  args: {
    attachmentType: 'close',
    headingClass: 'headline-02',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    inlineIconClass: 'fa-regular fa-car',
  },
};

export const WithIconBlock: Story = {
  args: {
    attachmentType: 'close',
    headingClass: 'title-03',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    iconBlockIconClass: 'fa-solid fa-sparkles',
    iconBlockIsXl: false,
  },
};

export const WithXlIconBlock: Story = {
  args: {
    attachmentType: 'close',
    headingClass: 'headline-02',
    heading: 'Heading text',
    body: 'Vivamus iaculis ante vitae lorem placerat pellentesque sed non augue. In quis aliquet dolor. Aliquam aliquam, arcu et condimentum accumsan, felis elit fermentum turpis, eget finibus dolor tortor nec massa. Nunc molestie, felis vitae commodo maximus, diam turpis aliquet ipsum, ut ornare urna libero vel mi.',
    iconBlockIconClass: 'fa-solid fa-ghost',
    iconBlockIsXl: true,
  },
};