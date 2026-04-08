import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DsDropdownMultiselectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ds-dropdown-multiselect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-dropdown-multiselect.component.html',
  styleUrl: './ds-dropdown-multiselect.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDropdownMultiselectComponent implements AfterViewInit {
  @Input() id = 'ds-dropdown-multiselect';
  @Input() label = 'Dropdown label text';
  @Input() assistiveText?: string;
  @Input() helperText?: string;
  @Input() placeholder = 'Choose permissions';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() showSelectAll = false;
  @Input() collapseThreshold?: number;
  @Input() summaryLabel = 'selected';
  @Input() options: DsDropdownMultiselectOption[] = [
    { label: 'View only', value: 'view-only' },
    { label: 'Comment', value: 'comment' },
    { label: 'Edit content', value: 'edit-content' },
    { label: 'Admin access', value: 'admin-access' },
  ];
  @Input() values: string[] = [];

  @Output() valuesChange = new EventEmitter<string[]>();
  @Output() selectionChange = new EventEmitter<string[]>();

  @ViewChildren('optionCheckbox')
  optionCheckboxes!: QueryList<ElementRef<HTMLInputElement>>;

  open = false;

  ngAfterViewInit(): void {
    this.syncSelectAllIndeterminate();
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

  get selectedOptions(): DsDropdownMultiselectOption[] {
    return this.options.filter((option) => this.values.includes(option.value));
  }

  get renderedOptions(): DsDropdownMultiselectOption[] {
    return [...this.options].sort((a, b) => {
      const aSelected = this.values.includes(a.value);
      const bSelected = this.values.includes(b.value);

      if (aSelected !== bSelected) {
        return aSelected ? -1 : 1;
      }

      return a.label.localeCompare(b.label);
    });
  }

  get showCollapsedSummary(): boolean {
    return (
      typeof this.collapseThreshold === 'number' &&
      this.collapseThreshold >= 0 &&
      this.selectedOptions.length > this.collapseThreshold
    );
  }

  get visibleTags(): DsDropdownMultiselectOption[] {
    if (!this.showCollapsedSummary || this.collapseThreshold === undefined) {
      return this.selectedOptions;
    }

    return this.selectedOptions.slice(0, this.collapseThreshold);
  }

  get collapsedCount(): number {
    if (!this.showCollapsedSummary || this.collapseThreshold === undefined) {
      return 0;
    }

    return this.selectedOptions.length - this.collapseThreshold;
  }

  get allSelected(): boolean {
    return this.options.length > 0 && this.values.length === this.options.length;
  }

  get partiallySelected(): boolean {
    return this.values.length > 0 && this.values.length < this.options.length;
  }

  isSelected(value: string): boolean {
    return this.values.includes(value);
  }

  toggleDropdown(event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.open = !this.open;
  }

  toggleOption(value: string, event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.values = this.isSelected(value)
      ? this.values.filter((selectedValue) => selectedValue !== value)
      : [...this.values, value];

    this.emitChanges();
    this.syncSelectAllIndeterminate();
  }

  removeTag(value: string, event: Event): void {
    event.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.values = this.values.filter((selectedValue) => selectedValue !== value);
    this.emitChanges();
    this.syncSelectAllIndeterminate();
  }

  toggleSelectAll(event?: Event): void {
    event?.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    this.values = this.allSelected ? [] : this.options.map((option) => option.value);
    this.emitChanges();
    this.syncSelectAllIndeterminate();
  }

  onOptionKeydown(event: KeyboardEvent, value: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleOption(value, event);
    }
  }

  onSelectAllKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSelectAll(event);
    }
  }

  private emitChanges(): void {
    this.valuesChange.emit(this.values);
    this.selectionChange.emit(this.values);
  }

  private syncSelectAllIndeterminate(): void {
    // No-op placeholder for lifecycle consistency.
    // Parent checkbox indeterminate state is bound in template.
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