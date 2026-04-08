import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DsDropdownTypeaheadOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ds-dropdown-typeahead',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-dropdown-typeahead.component.html',
  styleUrl: './ds-dropdown-typeahead.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDropdownTypeaheadComponent {
  @Input() id = 'ds-dropdown-typeahead';
  @Input() label = 'Type-ahead';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() placeholder = 'Type to filter options';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() options: DsDropdownTypeaheadOption[] = [
    { label: 'Apple', value: 'apple' },
    { label: 'Apricot', value: 'apricot' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
  ];
  @Input() value: string | null = null;

  @Output() valueChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<DsDropdownTypeaheadOption>();

  open = false;
  query = '';

  get dropdownClasses(): string[] {
    return this.size === 'sm' ? ['dropdown', 'dropdown-sm'] : ['dropdown'];
  }

  get filteredOptions(): DsDropdownTypeaheadOption[] {
    const normalizedQuery = this.query.trim().toLowerCase();

    if (!normalizedQuery) {
      return this.options;
    }

    return this.options.filter((option) =>
      option.label.toLowerCase().includes(normalizedQuery),
    );
  }

  onInput(event: Event): void {
    if (this.disabled || this.readonly) {
      return;
    }

    const target = event.target as HTMLInputElement;
    this.query = target.value;
    this.open = true;
  }

  onFocus(event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.open = true;
  }

  selectOption(option: DsDropdownTypeaheadOption, event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.value = option.value;
    this.query = option.label;
    this.open = false;
    this.valueChange.emit(option.value);
    this.selectionChange.emit(option);
  }

  clear(event: Event): void {
    event.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.query = '';
    this.value = null;
    this.open = true;
    this.valueChange.emit('');
  }

  onOptionKeydown(event: KeyboardEvent, option: DsDropdownTypeaheadOption): void {
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