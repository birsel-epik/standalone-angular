import {Routes} from "@angular/router";
import {StudentLayoutComponent} from "./student-layout/student-layout.component";
import {StudentComponent} from "./pages/student/student.component";

export const studentRoutes: Routes = [
  {
    path: '', component: StudentLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', component: StudentComponent},
      {path: 'student', component: StudentComponent},
    ]
  }
]
