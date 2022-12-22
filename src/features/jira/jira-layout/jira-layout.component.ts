import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../../landing/components/navigation/navigation.component";
import {NavComponent} from "../navigation/navigation.component";
import {BoardsComponent} from "../pages/boards/boards.component";
import {HomeJiraComponent} from "../pages/home/home.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-jira-layout',
  standalone: true,
  templateUrl: './jira-layout.component.html',
  imports: [
    CommonModule, RouterModule,
    RouterOutlet,
    NavigationComponent,
    NavComponent,
    BoardsComponent,
    HomeJiraComponent
  ],
  styleUrls: ['./jira-layout.component.scss']
})
export class JiraLayoutComponent {

  navbarCollapsed = false;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
