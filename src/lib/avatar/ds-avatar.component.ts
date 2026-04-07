import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type DsAvatarVariant = 'icon' | 'initials' | 'image';
export type DsAvatarSize = 'md' | 'sm' | 'xs';
export type DsAvatarExpressivePalette =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

@Component({
  selector: 'ds-avatar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ds-avatar.component.html',
  styleUrl: './ds-avatar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsAvatarComponent {
  @Input() variant: DsAvatarVariant = 'icon';
  @Input() size: DsAvatarSize = 'md';

  /**
   * Buckholt examples show Font Awesome icons inside `.avatar-icon`.
   * Default keeps parity with the documented base example.
   */
  @Input() iconClass = 'fa-regular fa-user';

  /**
   * Buckholt documents up to two initials.
   * This component renders the provided value as-is.
   */
  @Input() initials = 'MF';

  @Input() src = '';
  @Input() alt = '';

  /**
   * Default expressive palette is represented by no extra palette class.
   */
  @Input() expressivePalette: DsAvatarExpressivePalette = 'default';

  /**
   * Adds `.expressive-dark` when true.
   */
  @Input() expressiveDark = false;

  get hostClasses(): string[] {
    const classes = ['avatar'];

    if (this.size === 'sm') {
      classes.push('avatar-sm');
    }

    if (this.size === 'xs') {
      classes.push('avatar-xs');
    }

    if (this.expressivePalette === 'secondary') {
      classes.push('expressive-secondary');
    }

    if (this.expressivePalette === 'tertiary') {
      classes.push('expressive-tertiary');
    }

    if (this.expressivePalette === 'quaternary') {
      classes.push('expressive-quaternary');
    }

    if (this.expressiveDark) {
      classes.push('expressive-dark');
    }

    return classes;
  }
}