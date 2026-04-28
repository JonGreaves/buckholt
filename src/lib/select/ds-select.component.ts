import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface DsSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type DsSelectSize = 'medium' | 'small';
export type DsSelectState = 'default' | 'disabled' | 'readonly' | 'invalid';

@Component({
  selector: 'ds-select',
  standalone: true,
  templateUrl: './ds-select.component.html',
  styleUrl: './ds-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsSelectComponent {
  @Input() id = 'select';
  @Input() name?: string;
  @Input() label = 'Select label';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() validationMessage?: string;
  @Input() placeholder = 'Choose an option';
  @Input() value = '';
  @Input() required = false;
  @Input() size: DsSelectSize = 'medium';
  @Input() state: DsSelectState = 'default';
  @Input() options: DsSelectOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  get selectClasses(): string {
    return [
      'form-select',
      this.size === 'small' ? 'form-select-sm' : '',
      this.state === 'invalid' ? 'is-invalid' : '',
      this.state === 'readonly' ? 'readonly' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  get isDisabled(): boolean {
    return this.state === 'disabled' || this.state === 'readonly';
  }

  get showValidationMessage(): boolean {
    return this.state === 'invalid' && !!this.validationMessage;
  }
}