import {Routes} from "@angular/router";
import {ArticleLayoutComponent} from "./article-layout/article-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {CreateArticleComponent} from "./pages/create-article/create-article.component";
import {ViewArticleComponent} from "./pages/view-article/view-article.component";

export const articleRoutes: Routes = [
  {
    path: '', component: ArticleLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'home', pathMatch: 'full', component: HomeComponent},
      {path: 'create', component: CreateArticleComponent},
      {path: 'view/:articleIndex', component: ViewArticleComponent} // makalenin indexine göre açılacak olan data içeriği açılacçak
    ],
  },
];
