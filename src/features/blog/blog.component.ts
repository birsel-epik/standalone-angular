import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, SlicePipe} from "@angular/common";
import {NgbActiveModal, NgbModal, NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {BlogService} from "../../app/services/blog/blog.service";
import {PostService} from "../../app/services/blog/post.service";
import {BlogModalComponent} from "./blog-modal/blog-modal.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgbPagination, SlicePipe],
  providers:[BlogService, PostService, NgbActiveModal, NgbModal, BsModalRef, BsModalService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  modalRef: BsModalRef | undefined;
  blogData : Array<any> = []; // Servisten gelen cevabı bir değişkene atamak için değişken tanımlıyoruz (2)

  pageSize = 8; // pagination için 8 li görünüm yapmak istiyoruz
  page = 13; // pagination için kaç sayfa olacağını belirtiyoruz

  constructor(
    private modalService: BsModalService,
    private postService: PostService,

    private blogService : BlogService

  ) {  }

  ngOnInit():void {
    this.postService.getPosts().subscribe((result) => { // servisten data çekmek için subscribe oluyoruz (1)
      console.log(result);
      this.blogData = result; // Servisten gelen cevabı bir değişkene atıyoruz. Html de kullanabilmek için (3)
    })
  }

  openModal(element: any, viewOrupdate:any) {
    const initialState = {
      data: this.blogData,
    };

    this.modalRef = this.modalService.show(BlogModalComponent, { initialState });
    debugger;
    this.modalRef.content.onSelectedData.subscribe((result: any) => {
      debugger;
      console.log('results', result);
    });
  }


/*  openModal(element: any, viewOrupdate:any) {
    const modalRef = this.modalService.open(BlogModalComponent, {
      backdrop: "static",
      size: "sm",
      centered: true
    });
    modalRef.componentInstance.data = //'your data want to sent in model';
      modalRef.result.then((response) => {
        console.log(response);
      });
  }*/


}
