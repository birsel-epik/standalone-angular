import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];
  // Servisin dışından da (Servisi implemente etmek için) buraya erişebilmek için değişken tanımlıyoruz

  constructor() {
    //debugger;
    let str = localStorage.getItem('boards');
    // localStorage dan çektiğimiz verileri bu değişkene atıyoruz
    if (str != null) {
      this.boards = JSON.parse(str);
      //JSON stringi içeride kullanabilmek için Parse ediyoruz, Objeye dönüştürüyoruz
    }
  }

  public create(title: any) { //metoda ulaşmak için Public yapıyoruz (Private bulunduğu yerde çalşır)
    let newBoardObj = {
      title: title,
      cards: []
      // Kartlar oluşunca buraya push ediyoruz, ilk değeri boş, çünkü henüz kart yok
    }

    this.boards.push(newBoardObj); // Yeni newBoardObj i boards arrayının içine göndermiş oluyoruz
    localStorage.setItem('boards', JSON.stringify(this.boards));
    // LocalStorage veriyi kaydetmiş oluyoruz
    // localStorage kaydededebilmek için JSON.stringify haline çevirmemiz gerekiyor
  }

  public update() {
    localStorage.setItem('boards', JSON.stringify(this.boards)); // boards ların içine eleman ekliyoruz (push), localStorage a kaydediyoruz
  }

  public delete (boardNumber: number) { // boardNumber -> parametre adı değişken olabilir, parametre isimleri fark etmez. Ne gönderdiyseniz karşı tarafta o değer tutulur
    this.boards.splice(boardNumber,1); // 1 soluna bunları yapıştırıacak, yani diziden 1 eleman çıkartılacak
    localStorage.setItem('boards', JSON.stringify((this.boards))); // Silindikten sonra değişikliğpi görmek için localStorage Update ediliyor
  }


}
