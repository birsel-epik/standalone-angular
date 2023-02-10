import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService {
  //BaseService den türettik

  constructor(private base: BaseService) {
    super(base.http) // türetme işlemi yapıyoruz
  }


  // article ları kaydetmek için gerekli olan metod
  public postArticle(data: any) {
    return this.base.postReq('/articles', data);
  }
  // public ile metoda erişebiliyoruz, içerisinde bir tane data alacak
  // url slash ile geldiyse ona göre istek atmış olacak


  // Tüm articles ları çekiyoruz
  public getArticles(){
    return this.base.getReq('/articles');
  }

  public updateArticles(articleData:any) {
    return this.base.putReq('/articles/' + articleData.id, articleData);
    //Gelen datanın içerisinde id bilgisi var, bu id ye sahip olan datanın içine yeni veri göndermiş oluyoruz
  }


}
