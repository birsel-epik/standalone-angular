import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "../../jira/navigation/navigation.component";
import {NavigationComponent} from "../../landing/components/navigation/navigation.component";
import {RouterModule, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    RouterOutlet,
    NavigationComponent,
    NavComponent
  ],
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent {
  navbarCollapsed = false;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
