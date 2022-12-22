import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BoardService} from "../../../../../app/services/board.service";
import {ToastService} from "../../../../../app/services/toast.service";

@Component({
  selector: 'app-boards-modal',
  standalone: true,
  templateUrl: './boards-modal.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./boards-modal.component.scss']
})

export class BoardsModalComponent {
  boardForm = new FormGroup({
    title: new FormControl('', [Validators.required])
  })
  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService,
    private boardService: BoardService
  ) { }

  createBoard() {
    this.boardService.create(this.boardForm.get('title')?.value)
    this.toastService.show('Board eklendi!', { classname: 'bg-success text-light', delay: 1000 });
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }

}
