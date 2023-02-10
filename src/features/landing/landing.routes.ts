import {Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {HomeComponent} from "./pages/home/home.component";
import {LandingLayoutComponent} from "./landing-layout/landing-layout.component";
import {DisplayPhotoComponent} from "../display-photo/display-photo.component";
import {EqualityComponent} from "../equality/equality.component";
import {CardComponent} from "../card/card.component";
import {JiraLayoutComponent} from "../jira/jira-layout/jira-layout.component";
import {BlogComponent} from "../blog/blog.component";
import {ArrayMethodsComponent} from "../array-methods/array-methods.component";
import {ArticleLayoutComponent} from "../article/article-layout/article-layout.component";

export const landingRoutes: Routes = [
  {
    path: '', component: LandingLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', component: HomeComponent}, // url ile tam eşleşme için pathMatch kullanılır
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'display-photo', component:DisplayPhotoComponent},
      {path: 'equality', component:EqualityComponent},
      {path: 'methods', component:ArrayMethodsComponent},
      {path: 'card', component:CardComponent},
      {path: 'jira', component:JiraLayoutComponent},
      {path: 'article', component:ArticleLayoutComponent},
      {path: 'blog', component:BlogComponent}
    ]
  }
]
