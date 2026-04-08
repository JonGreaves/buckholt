import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DsDropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ds-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-dropdown.component.html',
  styleUrl: './ds-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDropdownComponent {
  @Input() id = 'ds-dropdown';
  @Input() label = 'Dropdown label text';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() placeholder = 'Choose an option…';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() options: DsDropdownOption[] = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ];
  @Input() value: string | null = null;

  @Output() valueChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<DsDropdownOption>();

  open = false;

  get selectedOption(): DsDropdownOption | undefined {
    return this.options.find((option) => option.value === this.value);
  }

  get displayLabel(): string {
    return this.selectedOption?.label ?? this.placeholder;
  }

  get dropdownClasses(): string[] {
    return this.size === 'sm' ? ['dropdown', 'dropdown-sm'] : ['dropdown'];
  }

  get toggleClasses(): string[] {
    const classes = ['dropdown-toggle'];

    if (this.readonly) {
      classes.push('readonly');
    }

    return classes;
  }

  toggleDropdown(event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.open = !this.open;
  }

  selectOption(option: DsDropdownOption, event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.value = option.value;
    this.open = false;
    this.valueChange.emit(option.value);
    this.selectionChange.emit(option);
  }

  onOptionKeydown(event: KeyboardEvent, option: DsDropdownOption): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectOption(option, event);
    }
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.open = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open = false;
  }
}