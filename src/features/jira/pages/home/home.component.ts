import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgbActiveModal, NgbModal, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf} from "@angular/common";
import {ToastsContainer} from "../toasts-container.components";
import {ToastService} from "../../../../app/services/toast.service";
import {BoardService} from "../../../../app/services/board.service";
import {BoardsModalComponent} from "../boards/boards-modal/boards-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgForOf, RouterLink, NgbTooltipModule, ToastsContainer],
  providers: [NgbActiveModal, NgbModal],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeJiraComponent {

  content: BoardsModalComponent | undefined;
  constructor(private modalService: NgbModal,
              public toastService: ToastService,
              public boardService: BoardService) {  }

  openBoardDialog():void {
    const modalResult = this.modalService.open(BoardsModalComponent,{
      backdrop: "static",
      size: "sm",
      centered: true,
      //backdropClass: 'light-blue-backdrop'
    });

  }

  deleteBoard(index: number, dangerTpl:any){
    this.boardService.delete(index);
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 1000 });
  }

}
