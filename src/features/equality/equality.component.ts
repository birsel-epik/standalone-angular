import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.scss']
})

export class EqualityComponent {
  mathForm = new FormGroup({
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber: new FormControl(this.generateNumber()),
      answer: new FormControl('')
    }
  )

    get firstNumbers()  {
      return this.mathForm.value.firstNumber;
    }

    get secondNumbers(){
      return this.mathForm.value.secondNumber;
    }

    generateNumber() {
          return Math.floor(Math.random()*10) // floor -> bir alt sayıya yuvarlıyor 6.3 - 6 ya yuvarlıyor
        }

}

