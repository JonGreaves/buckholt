import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export type AccordionSize = 'md' | 'lg';

export type AccordionItem = {
  heading: string;
  body: string;
  subheading?: string;
  expanded?: boolean;
};

@Component({
  selector: 'ds-accordion',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './ds-accordion.component.html',
  styleUrls: ['./ds-accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsAccordionComponent {
  @Input() accordionId = 'accordionExample';
  @Input() size: AccordionSize = 'md';
  @Input() singleExpand = false;

  @Input() items: AccordionItem[] = [];

  get containerClasses(): string {
    return this.size === 'lg' ? 'accordion accordion-lg' : 'accordion';
  }

  panelId(index: number): string {
    return `${this.accordionId}_item_${index + 1}`;
  }

  targetId(index: number): string {
    return `#${this.panelId(index)}`;
  }

  itemExpanded(item: AccordionItem): boolean {
    return !!item.expanded;
  }

  parentTarget(): string {
    return `#${this.accordionId}`;
  }
}