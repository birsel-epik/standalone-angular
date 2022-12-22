import {Routes} from "@angular/router";
import {JiraLayoutComponent} from "./jira-layout/jira-layout.component";
import {HomeComponent} from "../landing/pages/home/home.component";
import {BoardsComponent} from "./pages/boards/boards.component";

export const exampleRoutes: Routes = [
  {
    path: '', component: JiraLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'boards', component:BoardsComponent}
    ]
  }
]
