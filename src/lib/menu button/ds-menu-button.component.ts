import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsMenuButtonStyle = 'primary' | 'secondary' | 'ghost';

export type DsMenuButtonItem =
  | DsMenuButtonActionItem
  | DsMenuButtonLinkItem
  | DsMenuButtonHeaderItem
  | DsMenuButtonDividerItem
  | DsMenuButtonSubmenuItem;

export interface DsMenuButtonActionItem {
  type: 'action';
  label: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuButtonLinkItem {
  type: 'link';
  label: string;
  href: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuButtonHeaderItem {
  type: 'header';
  label: string;
}

export interface DsMenuButtonDividerItem {
  type: 'divider';
}

export interface DsMenuButtonSubmenuItem {
  type: 'submenu';
  label: string;
  iconClass?: string;
  disabled?: boolean;
  items: DsMenuButtonSubmenuChildItem[];
}

export type DsMenuButtonSubmenuChildItem =
  | DsMenuButtonSubmenuActionItem
  | DsMenuButtonSelectableSubmenuItem;

export interface DsMenuButtonSubmenuActionItem {
  type: 'action';
  label: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuButtonSelectableSubmenuItem {
  type: 'selectable';
  label: string;
  selectionType: 'single' | 'multiple';
  checked?: boolean;
  disabled?: boolean;
  name?: string;
}

@Component({
  selector: 'ds-menu-button',
  standalone: true,
  templateUrl: './ds-menu-button.component.html',
  styleUrl: './ds-menu-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsMenuButtonComponent {
  private static nextInstanceId = 0;

  @Input() label = 'Menu button';
  @Input() style: DsMenuButtonStyle = 'primary';
  @Input() items: DsMenuButtonItem[] = [];

  protected readonly instanceId = `ds-menu-button-${DsMenuButtonComponent.nextInstanceId++}`;

  protected get triggerClass(): string {
    return `btn btn-${this.style} menu-toggle`;
  }

  protected getSelectableId(parentIndex: number, childIndex: number): string {
    return `${this.instanceId}-${parentIndex}-${childIndex}`;
  }

  protected getSelectableName(
    item: DsMenuButtonSelectableSubmenuItem,
    parentIndex: number,
  ): string | null {
    if (item.selectionType !== 'single') {
      return null;
    }

    return item.name?.trim() || `${this.instanceId}-single-${parentIndex}`;
  }
}