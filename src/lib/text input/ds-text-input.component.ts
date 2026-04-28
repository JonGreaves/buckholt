import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsTextInputSize = 'medium' | 'small';
export type DsTextInputType = 'text' | 'password';
export type DsTextInputLabelMeta = '' | 'required' | 'optional';

@Component({
  selector: 'ds-text-input',
  standalone: true,
  templateUrl: './ds-text-input.component.html',
  styleUrl: './ds-text-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsTextInputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;

  @Input() labelMeta: DsTextInputLabelMeta = '';
  @Input() type: DsTextInputType = 'text';
  @Input() size: DsTextInputSize = 'medium';

  @Input() value = '';
  @Input() placeholder = '';

  @Input() assistiveText = '';
  @Input() helperText = '';
  @Input() validationMessage = '';

  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() invalid = false;

  @Input() iconClass = '';

  @Input() actionIconClass = '';
  @Input() actionAriaLabel = '';

  @Input() showClearButton = false;

  get inputClasses(): string {
    return [
      'form-control',
      this.size === 'small' ? 'form-control-sm' : '',
      this.invalid ? 'is-invalid' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  get showActionButton(): boolean {
    return Boolean(this.actionIconClass) && !this.iconClass && !this.showClearButton;
  }

  get showIcon(): boolean {
    return Boolean(this.iconClass) && !this.showActionButton;
  }

  get showClear(): boolean {
    return this.showClearButton && !this.showActionButton;
  }
}