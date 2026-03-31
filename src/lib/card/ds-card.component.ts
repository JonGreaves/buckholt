import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';

type CardLayout = 'default' | 'horizontal' | 'horizontal-right';
type CardSize = 'default' | 'lg';
type CardVariant =
  | 'default'
  | 'clickable'
  | 'selectable-radio'
  | 'selectable-checkbox';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ds-card.component.html',
  styleUrls: ['./ds-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCardComponent {
  @Input() layout: CardLayout = 'default';
  @Input() size: CardSize = 'default';
  @Input() variant: CardVariant = 'default';

  @Input() href?: string;

  @Input() imgSrc?: string;
  @Input() imgAlt?: string;

  @Input() name?: string;
  @Input() value?: string;
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

    if (this.size === 'lg') {
      classes.push('card-lg');
    }

    if (this.layout === 'horizontal') {
      classes.push('card-horizontal');
    }

    if (this.layout === 'horizontal-right') {
      classes.push('card-horizontal', 'card-horizontal-right');
    }

    if (this.variant === 'clickable') {
      classes.push('card-clickable');
    }

    if (this.isSelectable) {
      classes.push('card-selectable');
    }

    return classes.join(' ');
  }
}