import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DsMenuButtonItem } from './ds-menu-button.component';

export type DsComboButtonStyle = 'primary' | 'secondary';

@Component({
  selector: 'ds-combo-button',
  standalone: true,
  templateUrl: './ds-combo-button.component.html',
  styleUrl: './ds-combo-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsComboButtonComponent {
  private static nextInstanceId = 0;

  @Input() label = 'Combo';
  @Input() style: DsComboButtonStyle = 'primary';
  @Input() items: DsMenuButtonItem[] = [];

  protected readonly instanceId = `ds-combo-button-${DsComboButtonComponent.nextInstanceId++}`;

  protected get mainButtonClass(): string {
    return `btn btn-${this.style}`;
  }

  protected get toggleButtonClass(): string {
    return `btn btn-${this.style} menu-toggle`;
  }
}