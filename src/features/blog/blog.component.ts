import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, SlicePipe} from "@angular/common";
import {NgbActiveModal, NgbModal, NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {ModalService} from "../../app/services/modal.service";
import {PostService} from "../../app/services/blog/post.service";
import {BlogModalComponent} from "./blog-modal/blog-modal.component";
import {BlogService} from "../../app/services/blog/blog.service";


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgbPagination, SlicePipe],
  providers:[PostService, NgbActiveModal, NgbModal, ModalService, BlogService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blogData : Array<any> = []; // Servisten gelen cevabı bir değişkene atamak için değişken tanımlıyoruz (2)
  data: any;
  modalRef: any;
  pageSize = 8; // pagination için 8 li görünüm yapmak istiyoruz
  page = 13; // pagination için kaç sayfa olacağını belirtiyoruz

  constructor(
    private modalService: ModalService,
    public postService: PostService

  ) {  }

  ngOnInit():void {
    this.postService.getPosts().subscribe((result) => { // servisten data çekmek için subscribe oluyoruz (1)
      console.log(result);
      this.blogData = result; // Servisten gelen cevabı bir değişkene atıyoruz. Html de kullanabilmek için (3)
    })
  }

  openModal(element: any, viewOrupdate:any) {
    this.postService.getPosts().subscribe((blogData: any[]) => {
      this.data = blogData;
      this.modalRef = this.modalService.show(BlogModalComponent, {
        initialState: { blogData },
        ignoreBackdropClick: true,
        animated: true,
        keyboard: true,
        class: 'modal',
      });
      this.modalRef.content.event.subscribe((result: any) => {
        debugger;
        console.log('results', result);
      });
    });
  }


}
