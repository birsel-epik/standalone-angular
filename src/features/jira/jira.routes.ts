import {Routes} from "@angular/router";
import {BoardsComponent} from "./pages/boards/boards.component";
import {JiraLayoutComponent} from "./jira-layout/jira-layout.component";
import {HomeJiraComponent} from "./pages/home/home.component";
import {BoardViewComponent} from "./pages/board-view/board-view.component";

export const jiraRoutes: Routes = [
  {
    path: '', component: JiraLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', component: HomeJiraComponent},
      {path: 'boards', component: BoardsComponent},
      {path: 'board-view/:boardIndex', component:BoardViewComponent}
    ]
  }
]
