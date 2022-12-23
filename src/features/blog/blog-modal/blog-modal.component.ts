import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastsContainer} from "../../jira/pages/toasts-container.components";

@Component({
  selector: 'app-blog-modal',
  standalone: true,
  templateUrl: './blog-modal.component.html',
  imports: [ToastsContainer],
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit{


  constructor(
    public activeModal: NgbActiveModal
  ) {
    //debugger;

/*    if(data) {

    }
    else {

    }*/

  }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }



}
