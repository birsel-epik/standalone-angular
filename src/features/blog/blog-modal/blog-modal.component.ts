import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ToastsContainer} from "../../jira/pages/toasts-container.components";
import {NgIf} from "@angular/common";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {PostService} from "../../../app/services/blog/post.service";

@Component({
  selector: 'app-blog-modal',
  standalone: true,
  templateUrl: './blog-modal.component.html',
  imports: [ToastsContainer, NgIf],
  providers: [NgbActiveModal, BsModalRef, BsModalService],
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit{
  isUpdate : boolean = false;
  imageUrl : string = "";
  title : string = "";
  body : string = "";

  blogData: any;


  //@Input() dataForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef,
    private postService: PostService
  ) {
    //debugger;

   /* if(this.data.isUpdate) { // Düzenleme durumunda yapılacak işlemler
        this.isUpdate = true;
    }
    else {   // görüntüleme durumunda yapılacak olan işlemler
      //debugger;
      this.imageUrl = this.data.posts.imageId.toString(); // string değeri number değere çeviriyoruz
      this.title = this.data.posts.title;
      this.body = this.data.posts.body;
    }
*/
  }

  ngOnInit():void {
    this.postService.getPosts().subscribe((res: any) => {
      this.blogData.length = 0;
      this.blogData.push(res[0]);
      // this.data = [res[0]];
    });
    //console.log(this.blogData)
  }

  close() {
    this.activeModal.close();
  }



}
