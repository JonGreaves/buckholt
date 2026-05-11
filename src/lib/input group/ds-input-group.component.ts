import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface DsInputGroupAction {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

@Component({
  selector: 'ds-input-group',
  standalone: true,
  templateUrl: './ds-input-group.component.html',
  styleUrl: './ds-input-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsInputGroupComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;

  @Input() type: 'text' = 'text';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() name?: string;
  @Input() disabled = false;
  @Input() readonly = false;

  @Input() startAddon?: string;
  @Input() endAddon?: string;
  @Input() actions: DsInputGroupAction[] = [];
}