import { Injectable } from '@angular/core';
import {BlogService } from './blog.service'


@Injectable({
  providedIn: 'root' // başka bir yerden bu servis implemente edilebilir
})
export class UserService extends BlogService { // extends -> BlogService den türetiyoruz. (get, pot, post kullanabilmek için)
  constructor(
    private blogService : BlogService
  )
  {
    super(blogService.http) // super -> BlogService in içindeki http yi kullanacağız
  }

  public getUsers() { // servise istek atıp users ları çekiyoruz
    return this.blogService.getReq('/users'); // / ile istek atınca blogService ile localhost url i birleştiriyor. Geriye çektiği değeri döndürüyoruz
  }

}
