import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DsMenuButtonItem } from './ds-menu-button.component';

@Component({
  selector: 'ds-overflow-menu-button',
  standalone: true,
  templateUrl: './ds-overflow-menu-button.component.html',
  styleUrl: './ds-overflow-menu-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsOverflowMenuButtonComponent {
  @Input() items: DsMenuButtonItem[] = [];
}