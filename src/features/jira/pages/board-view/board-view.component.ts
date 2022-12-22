import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../../../app/services/toast.service";
import {BoardService} from "../../../../app/services/board.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BoardViewModalComponent} from "./board-view-modal/board-view-modal.component";
import {NgForOf} from "@angular/common";
import {ToastsContainer} from "../toasts-container.components";

@Component({
  selector: 'app-board-view',
  standalone: true,
  providers: [NgbActiveModal, NgbModal],
  templateUrl: './board-view.component.html',
  imports: [NgForOf, ToastsContainer],
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent {
  boardIndex: any = "0";
  boardTitle: string = "";
  constructor( private route: ActivatedRoute,
               public  modalService: NgbModal,
               public toastService: ToastService,
               public boardService:BoardService) {
  }

  ngOnInit():void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  }

  openCardDialog() {
    const result = this.modalService.open(BoardViewModalComponent,
      {
        backdrop: "static",
        size: "sm",
        centered: true,
        backdropClass: 'light-blue-backdrop',
        //data: this.boardIndex
      });

   // if (!result) return;
   // this.boardIndex.push(result);
  }

  deleteCard(indexCard: number, dangerTpl: any) {
    this.boardService.delete(indexCard);
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 1000 });
  }

  editCard(indexCard:number, card:any) {}



}

