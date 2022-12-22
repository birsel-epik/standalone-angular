import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../components/navigation/navigation.component";

@Component({
  selector: 'app-jira-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavigationComponent,
    RouterOutlet
  ],
  templateUrl: './jira-layout.component.html',
  styleUrls: ['./jira-layout.component.scss']
})
export class JiraLayoutComponent {

}
