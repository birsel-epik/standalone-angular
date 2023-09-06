import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbPagination,
} from "@ng-bootstrap/ng-bootstrap";
import { TranslocoModule } from "@ngneat/transloco";
import { DashboardToolbarComponent } from "../dashboard-toolbar/dashboard-toolbar.component";
import {ColumnTemplateDirective} from "../../directives/column-template.directive";
import {GridItemTemplateDirective} from "../../directives/grid-item-template.directive";
import {DataViews, TableDataSource} from "../../interface/dashboard.interface";

@Component({
  selector: "app-dashboard-table",
  standalone: true,
  imports: [
    CommonModule,
    NgbPagination,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdownItem,
    TranslocoModule,
  ],
  templateUrl: "./dashboard-table.component.html",
  styleUrls: ["./dashboard-table.component.scss"],
})
export class DashboardTableComponent implements AfterViewInit, OnChanges {
  @ContentChildren(DashboardToolbarComponent) toolbars!: QueryList<DashboardToolbarComponent>;

  @ContentChildren(ColumnTemplateDirective) columns!: QueryList<ColumnTemplateDirective>;
  @ContentChild(GridItemTemplateDirective) gridItemTemplate?: GridItemTemplateDirective;

  @Input() enableSelection = false;
  @Input() dataType: "server" | "client" = "client";
  @Input() dataSource: TableDataSource<any> | null = null;
  @Input() view: DataViews = DataViews.Table;
  @Input() gridTemplateColumns = "repeat(3,1fr)";

  // Page size model
  @Input() pageSize = 20;
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() page = 1;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>(); // Page changed event

  @Input() selection: any[] = [];
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter<any[]>(); // Selection changed event

  @Input() collectionSize = 0; // Only for server side. It will be overriden if client side choosen
  @Output() sort: EventEmitter<any> = new EventEmitter<any>(); // Column header sort event

  @Input() pageSizeList: number[] = [20, 50, 100, 200, 0]; // Page size can be customized

  @Input() pageTitle = "";

  @Input() searchText = "";
  selectionDeterminate: "all" | "indeterminate" | "none" = "none";

  paginatedData: any[] = [];

  ngAfterViewInit(): void {
    // console.log(this.columns);
    this.checkIndeterminate();
  }

  get itemCount() {
    return this.dataType == "client" ? (this.dataSource ? this.dataSource.collectionSize : 0) : this.collectionSize;
  }

  get filteredData() {
    if (!this.dataSource) return [];

    if (this.searchText == "") {
      return this.dataSource?.data;
    }

    const searchableCols = this.columns.filter((c) => c.searchable).map((c) => c.name);
    return this.dataSource?.data.filter((item) => {
      return searchableCols.some((col) => {
        if (typeof item[col] == "string") return item[col].toLowerCase().includes(this.searchText.toLowerCase());
        if (typeof item[col] == "number") return item[col] == Number(this.searchText);
        return false;
      });
    });
  }

  calcPaginatedData() {
    if (!this.dataSource) return;

    if (this.dataType == "server") return;

    const filteredData = this.filteredData;

    const pageSize = this.pageSize == 0 ? filteredData.length : this.pageSize;

    const start = (this.page - 1) * pageSize;
    const end = start + pageSize;

    const data = [];
    for (let i = start; i < end; i++) {
      if (!filteredData[i]) continue;
      data.push(filteredData[i]);
    }

    this.paginatedData = data;
  }

  pageSizeChanged(ps: number) {
    this.pageSize = ps;
    this.pageSizeChange.emit(ps);

    this.clearSelection();

    this.calcPaginatedData();
  }

  onSort(col: ColumnTemplateDirective) {
    if (!col || !col.sortable) return;

    // Cycle through sort directions
    let dir = col.sortDirection;
    if (!dir) {
      this.columns.forEach((c) => (c.sortDirection = null));
      dir = "asc";
    } else if (dir == "asc") {
      dir = "desc";
    } else if (dir == "desc") {
      dir = null;
    }

    col.sortDirection = dir;
    col.sort.emit(dir);
    this.sort.emit({ columnName: col.name, direction: dir });

    if (this.dataType == "client") {
      if (dir == null) return;
      // Sort data client side
      this.dataSource?.data.sort((a: { [key: string]: string }, b: { [key: string]: string }) => {
        if (a[col.name] < b[col.name]) {
          return dir == "asc" ? -1 : 1;
        } else if (a[col.name] > b[col.name]) {
          return dir == "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    this.calcPaginatedData();
  }

  selectAllClick($event: Event) {
    if (!this.dataSource) return;

    const checkbox = $event.target as HTMLInputElement;
    this.selectAll(checkbox.checked);
  }

  selectAll(select = false) {
    if (select) {
      this.paginatedData.forEach((item) => (item.selected = true));
    } else {
      this.paginatedData.forEach((item) => (item.selected = false));
    }

    this.emitSelection();
    this.checkIndeterminate();
  }

  selectClick($event: Event, item: any) {
    const checkbox = $event.target as HTMLInputElement;

    this.selectToggleItem(item, checkbox.checked);
  }

  selectToggleItem(item: any, state: boolean | null = null) {
    if (state === null) {
      item.selected = !item.selected;
    } else {
      item.selected = state;
    }

    this.emitSelection();
    this.checkIndeterminate();
  }

  /**
   * Check indeterminate state of main checkbox
   */
  checkIndeterminate() {
    if (this.paginatedData.length == 0) {
      this.selectionDeterminate = "none";
      return;
    }
    const selectionState = this.paginatedData.reduce((acc, currentValue) => {
      if (currentValue.selected) return acc + 1;
      return acc;
    }, 0);

    if (selectionState < this.paginatedData.length && selectionState > 0) {
      this.selectionDeterminate = "indeterminate";
    } else if (selectionState == this.paginatedData.length) {
      this.selectionDeterminate = "all";
    } else {
      this.selectionDeterminate = "none";
    }
  }

  emitSelection() {
    if (!this.dataSource) {
      this.selectionChange.emit([]);
      return;
    }

    const selectedItems = this.dataSource.data.filter((item) => item.selected);

    this.selectionChange.emit([...selectedItems]);
    this.selection = selectedItems;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["dataSource"] || changes["selection"]) {
      this.checkIndeterminate();
    }

    if (changes["dataSource"] || changes["searchText"]) {
      this.calcPaginatedData();
    }
  }

  pageChanged($event: number) {
    this.page = $event;

    this.clearSelection();

    this.calcPaginatedData();
  }

  clearSelection() {
    if (this.dataSource) {
      this.dataSource.data.forEach((item) => (item.selected = false));
    }

    this.paginatedData.forEach((item) => (item.selected = false));

    this.checkIndeterminate();
  }

  itemDataClicked(col: ColumnTemplateDirective, item: any) {
    col.colClick.emit({ col, row: item });

    if (!col.selectOnClick) return;

    if (!this.enableSelection) return;

    this.selectToggleItem(item);
  }

  itemDoubleClicked(col: ColumnTemplateDirective, item: any) {
    col.colDoubleClick.emit({ col, row: item });
  }
}
