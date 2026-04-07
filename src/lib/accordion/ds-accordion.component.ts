import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface DsAccordionItem {
  heading: string;
  bodyHtml: string;
  expanded?: boolean;
}

@Component({
  selector: 'ds-accordion',
  standalone: true,
  templateUrl: './ds-accordion.component.html',
  styleUrl: './ds-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsAccordionComponent {
  @Input() items: DsAccordionItem[] = [];

  @Input() size: 'medium' | 'large' = 'medium';

  @Input() singleExpand = false;

  @Input() accordionId = 'dsAccordion';

  protected isExpanded(index: number): boolean {
    return !!this.items[index]?.expanded;
  }

  protected getAccordionClasses(): string[] {
    return this.size === 'large' ? ['accordion', 'accordion-lg'] : ['accordion'];
  }

  protected getCollapseId(index: number): string {
    return `${this.accordionId}_item_${index + 1}`;
  }

  protected toggleItem(index: number): void {
    const currentItem = this.items[index];

    if (!currentItem) {
      return;
    }

    if (this.singleExpand) {
      this.items = this.items.map((item, itemIndex) => ({
        ...item,
        expanded: itemIndex === index ? !item.expanded : false,
      }));
      return;
    }

    this.items = this.items.map((item, itemIndex) =>
      itemIndex === index
        ? { ...item, expanded: !item.expanded }
        : item
    );
  }
}