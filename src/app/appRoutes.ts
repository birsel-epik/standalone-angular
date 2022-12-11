import {Routes} from "@angular/router";
import {ErrorComponent} from "../features/common/pages/error/error.component";

export const appRoutes: Routes = [
  {path: 'admin', loadChildren: () => import('../features/admin/admin.routes').then(routes => routes.adminRoutes)},
  {path: '', loadChildren: () => import('../features/landing/landing.routes').then(routes => routes.landingRoutes)},
  {path: '**', component: ErrorComponent}
]
