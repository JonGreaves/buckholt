import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DsRadioComponent } from './ds-radio.component';

export interface DsRadioOption {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

@Component({
  selector: 'ds-radio-group',
  standalone: true,
  imports: [DsRadioComponent],
  templateUrl: './ds-radio-group.component.html',
  styleUrl: './ds-radio-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsRadioGroupComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) labelFor!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) options: DsRadioOption[] = [];

  @Input() assistiveText = '';
  @Input() helperText = '';
  @Input() invalidFeedback = '';
  @Input() disabled = false;
  @Input() readonly = false;
}