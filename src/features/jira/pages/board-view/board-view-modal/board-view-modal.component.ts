import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ToastsContainer} from "../../toasts-container.components";
import {ToastService} from "../../../../../app/services/toast.service";
import {BoardService} from "../../../../../app/services/board.service";

@Component({
  selector: 'app-board-view-modal',
  standalone: true,
  templateUrl: './board-view-modal.component.html',
  imports: [ReactiveFormsModule, FormsModule, NgForOf, ToastsContainer],
  styleUrls: ['./board-view-modal.component.scss']
})
export class BoardViewModalComponent {

  data: any; // Sonra sil
  title : string = '';
  tasks : Array<string> = [''];
  // buraya tasklar eklenecek, 1 den fazla task olacakğı için (dizi) Array olarak tanımlıyoruz.
  tasksLoop: any = [false]; //task yapıldı mı? yapımadı mı? Bu değeri tutuyoruz.

  constructor(
    public activeModal: NgbActiveModal,
    public toastService: ToastService,
    public boardService : BoardService,

  ) {
  }
  ngOnInit():void {
    //debugger;


    if (this.data) {
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;
    }
    // Güncelleme işlemi yapılacağı zaman verileri servisten çekip dolduruyoruz

     //let a = this.data;
    //console.log(this.boardService.boards);
  }


  addTask() {
    this.tasks.push(''); // içerisine ne kadar task var ise buraya basacağız
    this.tasksLoop.push(false); // başlangıçta initialize edildiğinde tik li olan tasklar çekilmiş olacak
  }


  createTask() {
    //debugger;
    if(this.tasks.some((element:string) => element === ""))
      // Eğer boş olan eleman var ise Toast ile ekrana mesaj çıkartıyoruz. // some -> herhangi biri buna sahipse, yani tipi de dahil olmak üzere boş string e eşitse
    {
      this.toastService.show('Yeni Task Giriniz!', { classname: 'bg-warning text-black', delay: 1000 });
    }
    else {
      if(!this.data) { // editMode false ise kart ekleme işlemi yapılıyor
        //this.boardService.boards.push({
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        })
      }

      else { // Var olan kart bilgilerini güncelliyoruz
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks;
      }
    }

      this.boardService.update(); // işlem bittikten sonra, data eklendikten sonra -> serviste güncellenmiş oluyor
      this.activeModal.close(); // servis tetiklendikten sonra Dialog kapatılır
    }


  deleteTask(i: number){
    this.tasks.splice(i,1); // tasklardan 1 birim siliyoruz
    this.tasksLoop.splice(i, 1);  // taskLooplardan 1 birim siliyoruz
  }


  close() {
    this.activeModal.close();
  }


}
