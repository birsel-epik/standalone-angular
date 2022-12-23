import { Injectable } from '@angular/core';
import {BlogService} from "./blog.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BlogService {
  constructor(
    private blogService: BlogService
  ) {
    super(blogService.http)
  }

  public getComments() { // servise istek atıp comment leri çekiyoruz
    return this.blogService.getReq('/comments');
  }

}
