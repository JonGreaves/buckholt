import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';

type LinkType = 'inline' | 'standalone' | 'standalone-icon';

@Component({
  selector: 'ds-link',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ds-link.component.html',
  styleUrls: ['./ds-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsLinkComponent {
  @Input() href = '#';
  @Input() text!: string;

  @Input() type: LinkType = 'inline';

  /** Designer-selected icon class (Font Awesome) */
  @Input() iconClass?: string;

  @Input() external = false;
  @Input() target?: '_blank' | '_self';

  get classes(): string | null {
    return this.type === 'standalone' || this.type === 'standalone-icon'
      ? 'link-standalone'
      : null;
  }

  /** Icon is not allowed unless the link type is standalone-icon */
  get showIcon(): boolean {
    return this.type === 'standalone-icon' && !!this.iconClass;
  }

  get computedTarget(): string | null {
    return this.external ? '_blank' : this.target || null;
  }

  get computedRel(): string | null {
    return this.external ? 'noopener noreferrer' : null;
  }
}
