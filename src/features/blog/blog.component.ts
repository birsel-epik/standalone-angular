import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, SlicePipe} from "@angular/common";
import {NgbActiveModal, NgbModal, NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {BlogService} from "../../app/services/blog/blog.service";
import {PostService} from "../../app/services/blog/post.service";
import {BlogModalComponent} from "./blog-modal/blog-modal.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgbPagination, SlicePipe],
  providers:[BlogService, PostService, NgbActiveModal, NgbModal],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blogData : Array<any> = []; // Servisten gelen cevabı bir değişkene atamak için değişken tanımlıyoruz (2)

  pageSize = 8; // pagination için 8 li görünüm yapmak istiyoruz
  page = 13; // pagination için kaç sayfa olacağını belirtiyoruz

  constructor(
    private postService: PostService,
    private modalService: NgbModal

  ) {  }

  ngOnInit():void {
    this.postService.getPosts().subscribe((result) => { // servisten data çekmek için subscribe oluyoruz (1)
      console.log(result);
      this.blogData = result; // Servisten gelen cevabı bir değişkene atıyoruz. Html de kullanabilmek için (3)
    })
  }

  openModal(element: any, viewOrupdate:any) { // Interface tanımlamış olsaydık, Interface i parametre olarak verebilirdik.
    const modalResult = this.modalService.open(BlogModalComponent,{ // modalResult ile tekrar yenilemek istediğimizde bu değişkeni kullanacağız
      //data: {blog:element, isUpdate:viewOrupdate},
      backdrop: "static",
      size: "sm",
      centered: true
    });
  }


}
