import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appGridItemTemplate]",
  standalone: true,
})
export class GridItemTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
