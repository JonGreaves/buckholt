import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsMultiFieldInputFieldType = 'text' | 'select';

export interface DsMultiFieldInputOption {
  label: string;
  value: string;
}

export interface DsMultiFieldInputField {
  type: DsMultiFieldInputFieldType;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  options?: DsMultiFieldInputOption[];
  disabled?: boolean;
  readonly?: boolean;
}

@Component({
  selector: 'ds-multi-field-input',
  standalone: true,
  templateUrl: './ds-multi-field-input.component.html',
  styleUrl: './ds-multi-field-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsMultiFieldInputComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) fields: DsMultiFieldInputField[] = [];
  @Input() stacked = false;

  get labelFor(): string | null {
    return this.fields[0]?.id ?? null;
  }

  get responseClasses(): string[] {
    const fieldClasses = new Set(
      this.fields.map((field) =>
        field.type === 'select' ? 'select-input' : 'text-input',
      ),
    );

    return [
      'response',
      'multi-input',
      this.stacked ? 'multi-input-stacked' : '',
      ...fieldClasses,
    ].filter(Boolean);
  }
}