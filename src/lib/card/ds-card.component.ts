import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DsCardVariant = 'core' | 'clickable';
export type DsCardSize = 'md' | 'lg';
export type DsCardStyle = 'default' | 'secondary';
export type DsCardImageAlignment = 'top' | 'left' | 'right';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-card.component.html',
  styleUrl: './ds-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCardComponent {
  @Input() variant: DsCardVariant = 'core';
  @Input() size: DsCardSize = 'md';
  @Input() style: DsCardStyle = 'default';

  @Input() title = 'Card title text';
  @Input() body =
    'Duis non quam et nisi tincidunt fermentum. Pellentesque habitant morbi tristique senectus.';

  @Input() href = '#';

  @Input() imageSrc = '';
  @Input() imageAlt = '';
  @Input() imageAlignment: DsCardImageAlignment = 'top';

  @Input() linkText = '';
  @Input() linkHref = '#';
  @Input() linkTarget: '_self' | '_blank' = '_self';

  @Input() emphasisTitle = '';
  @Input() emphasisBody = '';
  @Input() emphasisInline = false;
  @Input() emphasisCentered = false;
  @Input() emphasisSecondary = false;

  get isClickable(): boolean {
    return this.variant === 'clickable';
  }

  get hasImage(): boolean {
    return this.imageSrc.trim().length > 0;
  }

  get hasStandaloneLink(): boolean {
    return !this.isClickable && this.linkText.trim().length > 0;
  }

  get hasEmphasisTile(): boolean {
    return this.emphasisTitle.trim().length > 0 || this.emphasisBody.trim().length > 0;
  }

  get cardClasses(): Record<string, boolean> {
    return {
      card: true,
      'card-clickable': this.isClickable,
      'card-lg': this.size === 'lg',
      'card-secondary': this.style === 'secondary',
      'card-horizontal': this.hasImage && this.imageAlignment !== 'top',
      'card-horizontal-right': this.hasImage && this.imageAlignment === 'right',
    };
  }

  get emphasisTileClasses(): Record<string, boolean> {
    return {
      'emphasis-tile': true,
      'emphasis-tile-inline': this.emphasisInline,
      'emphasis-tile-center': this.emphasisCentered,
      'emphasis-tile-secondary': this.emphasisSecondary,
    };
  }
}