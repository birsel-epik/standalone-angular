import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConvertPipe} from "../../app/pipes/convert.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ConvertPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  name = '';
  date = '';
  money: number = 0;
  height: number = 0;
  miles: number = 0;


  lessons = {
    name: 'Math',
    subject: 'NaturalNumbers',
    currentPoint: 65,
  };

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onMoneyChange(value: string) {
    this.money = parseFloat(value);
    /* string bir ifadeyi floata çeviriyoru */
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value)
  }

}
