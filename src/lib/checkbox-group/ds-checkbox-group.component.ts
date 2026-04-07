import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface DsCheckboxGroupItem {
  id: string;
  label: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  invalid?: boolean;
}

@Component({
  selector: 'ds-checkbox-group',
  standalone: true,
  templateUrl: './ds-checkbox-group.component.html',
  styleUrl: './ds-checkbox-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCheckboxGroupComponent {
  @Input() id = 'checkInputExample';
  @Input() label = 'Checkbox input label';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() validationMessage?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() invalid = false;
  @Input() items: DsCheckboxGroupItem[] = [
    {
      id: 'checkbox-group-checkbox1',
      label: 'Checkbox #1',
      value: '',
    },
    {
      id: 'checkbox-group-checkbox2',
      label: 'Checkbox #2',
      value: '',
    },
    {
      id: 'checkbox-group-checkbox3',
      label: 'Checkbox #3',
      value: '',
    },
  ];

  protected onClick(event: MouseEvent, item: DsCheckboxGroupItem): void {
    if (this.readonly || item.readonly) {
      event.preventDefault();
    }
  }

  protected onKeydown(event: KeyboardEvent, item: DsCheckboxGroupItem): void {
    if ((this.readonly || item.readonly) && (event.key === ' ' || event.code === 'Space')) {
      event.preventDefault();
    }
  }

  protected trackById(_: number, item: DsCheckboxGroupItem): string {
    return item.id;
  }

  protected get showAssistiveText(): boolean {
    return !!this.assistiveText && !this.disabled && !this.readonly;
  }

  protected get showHelperText(): boolean {
    return !!this.helperText && !this.disabled && !this.readonly;
  }
}