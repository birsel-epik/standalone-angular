import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {BoardService} from "../../../../../app/services/board.service";

@Component({
  selector: 'app-board-view-modal',
  standalone: true,
  templateUrl: './board-view-modal.component.html',
  imports: [ReactiveFormsModule, FormsModule, NgForOf],
  styleUrls: ['./board-view-modal.component.scss']
})
export class BoardViewModalComponent {
  title : string = '';
  tasks : Array<string> = [''];
  // buraya tasklar eklenecek, 1 den fazla task olacakğı için (dizi) Array olarak tanımlıyoruz.
  tasksLoop: any = [false]; //task yapıldı mı? yapımadı mı? Bu değeri tutuyoruz.

  constructor(
    public activeModal: NgbActiveModal,
    public boardService : BoardService,

  ) {
  }

  ngOnInit():void {
   /* debugger;
     let a = this.data;*/
  }


  addTask() {
    this.tasks.push(''); // içerisine ne kadar task var ise buraya basacağız
    this.tasksLoop.push(false); // başlangıçta initialize edildiğinde tik li olan tasklar çekilmiş olacak
  }

  createTask() {
    //debugger;
    if(this.tasks.some((element:string) => element === ""))
      // Eğer boş olan eleman var ise SnackBar ile ekrana mesaj çıkartıyoruz.
      // some -> herhangi biri buna sahipse, yani tipi de dahil olmak üzere boş string e eşitse
    {
      // this.toastService.show('Yeni Task Giriniz');
    }
    else {
      this.boardService.boards.push({
        /*this.boardService.boards[this.data.boardIndex].cards.push*/
        title: this.title,
        checklist: this.tasks,
        status: this.tasksLoop
      });
      this.boardService.update(); // işlem bittikten sonra, data eklendikten sonra -> serviste güncellenmiş oluyor
      this.activeModal.close(); // servis tetiklendikten sonra Dialog kapatılır
    }
  }

  deleteTask(index: number){
    this.boardService.delete(index);
  }


  close() {
    this.activeModal.close();
  }


}
