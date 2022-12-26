import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf} from "@angular/common";
import {ToastsContainer} from "../toasts-container.components";
import {ToastService} from "../../../../app/services/toast.service";
import {BoardService} from "../../../../app/services/board.service";
import {BoardViewModalComponent} from "./board-view-modal/board-view-modal.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-board-view',
  standalone: true,
  providers: [NgbActiveModal],
  templateUrl: './board-view.component.html',
  imports: [NgForOf, ToastsContainer, FormsModule],
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
    const modalResult = this.modalService.open(BoardViewModalComponent,
      {
        backdrop: "static",
        size: "sm",
        scrollable: true,
        centered: true,
        //data: {boardIndex: this.boardIndex, editMode:false}
      });

    //if (!modalResult) return;

      //this.boardIndex.push(modalResult);
  }

  deleteCard(indexCard: number, dangerTpl: any) {
    this.boardService.boards[this.boardIndex].cards.splice(indexCard, 1);
    // Boardların içerisindeki Kartların indexsine göre 1 eksiltiyor
    this.boardService.update();
    // Eksiltme işleminden sonra LocalStorage da update işlemi yapıyor.

    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 1000 });
  }

  editCard(indexCard:number, card:any) {
    const modalResult = this.modalService.open(BoardViewModalComponent,
      {
        backdrop: "static",
        size: "sm",
        scrollable: true,
        centered: true,

        //data: {boardIndex: this.boardIndex, cardIndex:indexCard, editMode:true}
      });
  }



}

