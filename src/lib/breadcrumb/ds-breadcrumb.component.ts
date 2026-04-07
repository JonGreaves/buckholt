import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type DsBreadcrumbListTag = 'ol' | 'ul';

export interface DsBreadcrumbItem {
  label: string;
  href: string;
}

export interface DsBreadcrumbOverflowItem {
  label: string;
}

@Component({
  selector: 'ds-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-breadcrumb.component.html',
  styleUrl: './ds-breadcrumb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsBreadcrumbComponent {
  @Input() items: DsBreadcrumbItem[] = [];
  @Input() overflowItems: DsBreadcrumbOverflowItem[] = [];
  @Input() currentLabel?: string;
  @Input() includeCurrent = false;
  @Input() listTag: DsBreadcrumbListTag = 'ol';
  @Input() dividerIcon?: string;
  @Input() menuPanelId = 'menu-panel-breadcrumb';
  @Input() overflowTooltipTitle = 'Options';

  @Output() overflowItemSelected = new EventEmitter<DsBreadcrumbOverflowItem>();

  get hasOverflow(): boolean {
    return this.overflowItems.length > 0;
  }

  get navStyle(): Record<string, string> | null {
    if (!this.dividerIcon) {
      return null;
    }

    return {
      '--breadcrumb-divider-icon': `'${this.dividerIcon}'`,
    };
  }

  onOverflowItemClick(item: DsBreadcrumbOverflowItem): void {
    this.overflowItemSelected.emit(item);
  }
}