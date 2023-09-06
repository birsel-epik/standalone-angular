import { Directive, EventEmitter, Input, OnInit, Output, TemplateRef } from "@angular/core";

export type SortDirection = "asc" | "desc" | null;

@Directive({
  selector: "[appColumnTemplate]",
  standalone: true,
})
export class ColumnTemplateDirective {
  @Input() label = ""; // Label of column
  @Input() name = ""; // Name of column. If you want to sort by column you must provide column name
  @Input() sortable = false;
  @Input() searchable = false;
  @Input() visible = true;
  @Input() selectOnClick = false;
  @Input() showOnList = true;

  @Output() sort: EventEmitter<SortDirection> = new EventEmitter<SortDirection>();
  @Output() colClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() colDoubleClick: EventEmitter<any> = new EventEmitter<any>();

  sortDirection: SortDirection = null;

  constructor(public template: TemplateRef<any>) {}
}
