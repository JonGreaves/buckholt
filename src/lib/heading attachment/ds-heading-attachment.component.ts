import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsHeadingAttachmentType = 'none' | 'close' | 'link' | 'tag';
export type DsHeadingAttachmentHeadingClass = 'headline-02' | 'title-03';

@Component({
  selector: 'ds-heading-attachment',
  standalone: true,
  templateUrl: './ds-heading-attachment.component.html',
  styleUrl: './ds-heading-attachment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsHeadingAttachmentComponent {
  @Input() heading = 'Heading text';
  @Input() headingClass: DsHeadingAttachmentHeadingClass = 'headline-02';
  @Input() body = 'Body text';
  @Input() eyebrow?: string;

  @Input() inlineIconClass?: string;
  @Input() iconBlockIconClass?: string;
  @Input() iconBlockIsXl = false;

  @Input() attachmentType: DsHeadingAttachmentType = 'close';

  @Input() closeAriaLabel = 'Close';

  @Input() linkLabel = 'View more';
  @Input() linkHref = '#';
  @Input() linkTarget: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @Input() linkIconClass = 'fa-regular fa-arrow-right';

  @Input() tagLabel = 'Tag label';

  get hasInlineIcon(): boolean {
    return !!this.inlineIconClass?.trim();
  }

  get hasIconBlock(): boolean {
    return !!this.iconBlockIconClass?.trim();
  }

  get iconBlockClass(): string {
    return this.iconBlockIsXl ? 'icon-block icon-block-xl' : 'icon-block';
  }
}