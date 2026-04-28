import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsResponseButtonSelectionMode = 'single' | 'multi';
export type DsResponseButtonSize = 'medium' | 'large';

export interface DsResponseButtonOption {
  label: string;
  value: string;
  iconClass?: string;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

@Component({
  selector: 'ds-response-button',
  standalone: true,
  templateUrl: './ds-response-button.component.html',
  styleUrl: './ds-response-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsResponseButtonComponent {
  @Input() label = 'Response button label';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() validationMessage?: string;

  @Input() options: DsResponseButtonOption[] = [
    { label: 'Response 1', value: 'response1' },
    { label: 'Response 2', value: 'response2' },
    { label: 'Response 3', value: 'response3' },
  ];

  @Input() selectionMode: DsResponseButtonSelectionMode = 'single';
  @Input() size: DsResponseButtonSize = 'medium';

  @Input() equalWidth = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;

  @Input() name = 'responsebuttoninputlabel';
  @Input() inputId = 'responsebutton';

  get inputType(): 'radio' | 'checkbox' {
    return this.selectionMode === 'multi' ? 'checkbox' : 'radio';
  }

  get responseClasses(): string[] {
    return [
      'response',
      'response-btn-input',
      this.equalWidth ? 'response-btn-equal' : '',
    ].filter(Boolean);
  }

  optionId(option: DsResponseButtonOption, index: number): string {
    return `${this.inputId}-${option.value || index}`;
  }

  optionDisabled(option: DsResponseButtonOption): boolean {
    return this.disabled || this.readonly || !!option.disabled || !!option.readonly;
  }

  optionLabelClasses(option: DsResponseButtonOption): string[] {
    return [
      'btn',
      'btn-response',
      this.size === 'large' ? 'btn-response-lg' : '',
      this.readonly || option.readonly ? 'readonly' : '',
    ].filter(Boolean);
  }

  showIcon(option: DsResponseButtonOption): boolean {
    return this.size === 'large' && !!option.iconClass;
  }
}