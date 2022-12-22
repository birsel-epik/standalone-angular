import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { EqualityValidators } from '../../app/class/equality-validators/equality-validators'
import {delay, filter, scan} from "rxjs";


@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.scss']
})

export class EqualityComponent {
  seconds = 0;

  mathForm = new FormGroup({ //Formu implemente ediyoruz
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber: new FormControl(this.generateNumber()),
      answer: new FormControl('')
    },
    [EqualityValidators.addition('answer', 'firstNumber', 'secondNumber')]
                    //mathForm a Custom Validation tanımlıyoruz. Farklı Tekrar bir Componentte kullanmak için formun argumalarını belirtiyoruz
  )

  get firstNo()  { // Formun ismi ile FormControl değerini çağırıyoruz. Referans ismi ile Html'e gönderiyoruz.
    return this.mathForm.value.firstNumber;
  }

  get secondNo(){ //Formun değerini çağırıyoruz
    return this.mathForm.value.secondNumber;
  }

  constructor() {  }

  ngOnInit(): void { // Component tetiklendiğinde burası çalışır
    const startTime = new Date(); // şu andaki zaman bilgisini alıyoruz
    let numberSolved = 0;  // Doğru cevap verdiği için (Cevaplar değişiyor). Değiştirebiliyorsak LET kullanıyoruz. Değiştiremiyorsak CONST kullanıyoruz.

    //console.log(this.mathForm.statusChanges);
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      // Dönen değeri filtrelemiş oluyoruz. Doğru cevap verildi ise, değeri VALID olanları almış oluyoruz.
      delay(800),
      // belirli bir süre sonra değişiklik yapıyor
      scan(
        acc => {
        return {
          numberSolved: acc.numberSolved + 1,
          starTime: acc.starTime
        };
      },
        {numberSolved: 0 , starTime : new Date() })

    ).subscribe(({numberSolved , starTime}) => {
        // numberSolved ++; // arttırma işlemi
        this.seconds = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        // son zaman ile başlangıç zamanını çıkartıp, geçen sürey buluyoruz. Doğru cevap verdiği ortalama süre
      //console.log(value);
     /* if ( value === 'INVALID') {
        return;
      }*/
     this.mathForm.setValue({
       // setValue -> Tüm form etiketlerine vermemiz lazım.
       // patchValue -> Parsiyer olarak değer ataması yapmak için. Form elemanlarının bütün değerleri update etmek zorunda değil
       firstNumber: this.generateNumber(),
       secondNumber: this.generateNumber(),
       answer: ''
     })

    })
  }

  generateNumber() {
    return Math.floor(Math.random()*10)
    // return -> Nerede çağırıyorsak o sayıyı elde edebilmek için return ediyoruz
    // floor -> Küsuratlı sayıyı bir alt sayıya yuvarlıyor Örn: 6.7 - 6 ya yuvarlıyor.
    // random -> rastgele sayı üretiyor.
  }

}

