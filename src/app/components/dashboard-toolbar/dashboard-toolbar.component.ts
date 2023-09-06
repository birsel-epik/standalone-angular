import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dashboard-toolbar",
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: "./dashboard-toolbar.component.html",
  styleUrls: ["./dashboard-toolbar.component.scss"],
})
export class DashboardToolbarComponent {
  @Input() sideMenuButton = true;

  @Output() sideMenuToggle: EventEmitter<any> = new EventEmitter<any>();

  @Input() hasSearch = false;

  @Output() searchStart: EventEmitter<string> = new EventEmitter<string>();

  actions = [
    {
      type: "button",
      label: "Add item",
      icon: "bi-plus-lg",
      color: "success",
      // action: () => {},
    },
    { type: "separator" },
    { type: "button", label: "Export", icon: "bi-download", color: "primary" },
  ];

  searchInput($event: Event) {
    const t = $event.target as HTMLInputElement;
    this.searchStart.emit(t.value);
  }
}
