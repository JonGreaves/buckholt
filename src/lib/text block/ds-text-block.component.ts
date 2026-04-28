import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsTextBlockHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type DsTextBlockHeadingStyle =
  | 'display-03'
  | 'display-02'
  | 'display-01'
  | 'headline-03'
  | 'headline-02'
  | 'headline-01'
  | 'title-03'
  | 'title-02'
  | 'title-01';

export type DsTextBlockIconMode = 'none' | 'inline' | 'block';
export type DsTextBlockIconBlockSize = 'medium' | 'xl';

@Component({
  selector: 'ds-text-block',
  standalone: true,
  templateUrl: './ds-text-block.component.html',
  styleUrl: './ds-text-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsTextBlockComponent {
  @Input() eyebrow?: string;
  @Input() heading?: string;
  @Input() headingLevel: DsTextBlockHeadingLevel = 'h2';
  @Input() headingStyle: DsTextBlockHeadingStyle = 'headline-03';
  @Input() paragraphs: string[] = [];

  @Input() iconClass = 'fa-regular fa-ghost';
  @Input() iconMode: DsTextBlockIconMode = 'none';
  @Input() iconBlockSize: DsTextBlockIconBlockSize = 'medium';

  get hasHeading(): boolean {
    return !!this.heading?.trim();
  }

  get paragraphItems(): string[] {
    return this.paragraphs.filter((paragraph) => !!paragraph?.trim());
  }

  get showEyebrow(): boolean {
    return !!this.eyebrow?.trim() && this.hasHeading && this.iconMode !== 'block';
  }

  get showInlineIcon(): boolean {
    return this.hasHeading && this.iconMode === 'inline' && !!this.iconClass?.trim();
  }

  get showIconBlock(): boolean {
    return (
      this.hasHeading &&
      this.iconMode === 'block' &&
      !!this.iconClass?.trim() &&
      !this.headingStyle.startsWith('display-')
    );
  }

  get iconBlockClasses(): string {
    return this.iconBlockSize === 'xl' ? 'icon-block icon-block-xl' : 'icon-block';
  }
}