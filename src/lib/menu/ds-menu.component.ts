import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DsMenuItem =
  | DsMenuActionItem
  | DsMenuLinkItem
  | DsMenuHeaderItem
  | DsMenuDividerItem
  | DsMenuSubmenuItem;

export interface DsMenuActionItem {
  type: 'action';
  label: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuLinkItem {
  type: 'link';
  label: string;
  href: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuHeaderItem {
  type: 'header';
  label: string;
}

export interface DsMenuDividerItem {
  type: 'divider';
}

export interface DsMenuSubmenuItem {
  type: 'submenu';
  label: string;
  iconClass?: string;
  disabled?: boolean;
  items: DsMenuSubmenuChildItem[];
}

export type DsMenuSubmenuChildItem =
  | DsMenuSubmenuActionItem
  | DsMenuSelectableSubmenuItem;

export interface DsMenuSubmenuActionItem {
  type: 'action';
  label: string;
  iconClass?: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface DsMenuSelectableSubmenuItem {
  type: 'selectable';
  label: string;
  selectionType: 'single' | 'multiple';
  checked?: boolean;
  disabled?: boolean;
  name?: string;
}

@Component({
  selector: 'ds-menu',
  standalone: true,
  templateUrl: './ds-menu.component.html',
  styleUrl: './ds-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsMenuComponent {
  private static nextInstanceId = 0;

  @Input() items: DsMenuItem[] = [];

  protected readonly instanceId = `ds-menu-${DsMenuComponent.nextInstanceId++}`;

  protected getSelectableId(parentIndex: number, childIndex: number): string {
    return `${this.instanceId}-${parentIndex}-${childIndex}`;
  }

  protected getSelectableName(
    item: DsMenuSelectableSubmenuItem,
    parentIndex: number,
  ): string | null {
    if (item.selectionType !== 'single') {
      return null;
    }

    return item.name?.trim() || `${this.instanceId}-single-${parentIndex}`;
  }
}