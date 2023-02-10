import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleService} from "../../../../app/services/article/article.service";
import {BaseService} from "../../../../app/services/article/base.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-view-article',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [HttpClient, BaseService, ArticleService],
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent {
  articlesData: Array<any> = [];
  articleIndex: any;
  username: string = '';
  comment: string = '';

  constructor(private articlesService: ArticleService,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.articleIndex = this.route.snapshot.paramMap.get('articleIndex');
    //hangi isimle çekeceğimize karar veriyoruz, hangi dataya tıklandığının index bilgisini alıyoruz

    this.articlesService.getArticles().subscribe((res) => {
      this.articlesData = res;
    })
  }

  addComment() {
    let obj = {username: this.username, comment: this.comment};
    this.articlesData[this.articleIndex].comments.push(obj);
    // gelen datanın indexine göre eleman ekliyoruz
    this.articlesService.updateArticles(this.articlesData[this.articleIndex]).subscribe((res) => {
      //buraya tek bir eleman veriyoruz, id ye sahip olan veriyi güncelleiyoruz
      this.username = '';
      this.comment = '';
      //datayı gönderdikten sonra inputları boşaltıyoruz
    })
  }


}
