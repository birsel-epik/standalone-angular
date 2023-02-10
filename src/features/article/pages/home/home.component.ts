import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleService} from "../../../../app/services/article/article.service";
import {BaseService} from "../../../../app/services/article/base.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [HttpClient, BaseService, ArticleService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  articlesData: Array<any> = [];

  constructor(private articlesService: ArticleService) {
  }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((res) => {
      this.articlesData = res;
    })
  }

}
