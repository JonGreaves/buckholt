import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[dsButtonIcon]',
  standalone: true,
})
export class DsButtonIconDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
