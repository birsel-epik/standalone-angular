import {Routes} from "@angular/router";
import {ErrorComponent} from "../features/common/pages/error/error.component";

export const appRoutes: Routes = [
  {path: 'admin', loadChildren: () => import('../features/admin/admin.routes').then(routes => routes.adminRoutes)},
  {path: 'jira', loadChildren:() => import('../features/jira/jira.routes').then(routes => routes.jiraRoutes)},
  {path: 'student', loadChildren:() => import('../features/student/student.routes').then(routes => routes.studentRoutes)},
  {path: 'article', loadChildren:() => import('../features/article/article.routes').then(routes => routes.articleRoutes)},
  {path: 'example', loadChildren:() => import('../features/example/example.routes').then(routes => routes.exampleRoutes)},
  {path: '', loadChildren: () => import('../features/landing/landing.routes').then(routes => routes.landingRoutes)},
  {path: '**', component: ErrorComponent}
]
