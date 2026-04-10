import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';

type CardVariant =
  | 'base'
  | 'clickable'
  | 'selectable-radio'
  | 'selectable-checkbox';
type CardStyle = 'default' | 'secondary';
type CardSize = 'default' | 'large';
type CardImagePosition = 'none' | 'top' | 'left' | 'right';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './ds-card.component.html',
  styleUrls: ['./ds-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCardComponent {
  @Input() variant: CardVariant = 'base';
  @Input() style: CardStyle = 'default';
  @Input() size: CardSize = 'default';
  @Input() imagePosition: CardImagePosition = 'none';

  @Input() href = '#';

  @Input() imgSrc?: string;
  @Input() imgAlt = '';

  @Input() name?: string;
  @Input() inputId?: string;
  @Input() inputValue = '';
  @Input() checked = false;

  get isClickable(): boolean {
    return this.variant === 'clickable';
  }

  get isSelectable(): boolean {
    return (
      this.variant === 'selectable-radio' ||
      this.variant === 'selectable-checkbox'
    );
  }

  get inputType(): 'radio' | 'checkbox' {
    return this.variant === 'selectable-radio'
      ? 'radio'
      : 'checkbox';
  }

  get classes(): string {
    const classes = ['card'];

    if (this.isClickable) {
      classes.push('card-clickable');
    }

    if (this.isSelectable) {
      classes.push('card-selectable');
    }

    if (this.style === 'secondary') {
      classes.push('card-secondary');
    }

    if (this.size === 'large') {
      classes.push('card-lg');
    }

    if (this.imagePosition === 'left') {
      classes.push('card-horizontal');
    }

    if (this.imagePosition === 'right') {
      classes.push('card-horizontal', 'card-horizontal-right');
    }

    return classes.join(' ');
  }

  get hasImage(): boolean {
    return this.imagePosition !== 'none' && !!this.imgSrc;
  }
}