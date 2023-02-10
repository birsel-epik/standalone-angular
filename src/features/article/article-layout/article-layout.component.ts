import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavigationComponent} from "../../landing/components/navigation/navigation.component";
import {NavComponent} from "../navigation/navigation.component";
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, NavComponent],
  templateUrl: './article-layout.component.html',
  styleUrls: ['./article-layout.component.scss']
})
export class ArticleLayoutComponent {

  navbarCollapsed = false;
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }


}
