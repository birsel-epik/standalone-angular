import { Injectable } from '@angular/core';
import {BlogService} from "./blog.service";

@Injectable({
  providedIn: 'root'
})
export class PostService extends BlogService{

  constructor(
    private blogService : BlogService
  ) {
    super(blogService.http);
  }

  public getPosts() // servise istek atıp post ları çekiyoruz
  {
    return this.blogService.getReq('/posts'); // / ile istek atınca blogService ile localhost url i birleştiriyor. Geriye çektiği değeri döndürüyoruz
  }

  public updatePosts(id:any, data:any)
  // data nın tipi ni export interface diyip interface tipinde verebiliriz. (Biz projede bu şekilde kullanıyoruz)
  {
    return this.blogService.putReq('/post'+id, data); // id ye göre verileri güncelleme işlemi yapıyoruz.
  }

}
