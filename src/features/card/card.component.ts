import { Component } from '@angular/core';
import {CardChildComponent} from "../card-child/card-child.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [
    CardChildComponent,
    NgForOf
  ],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'bike.jpg',
      userName: 'cbdag',
      description: 'Çok hızlı sürdüm'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'mountain.jpg',
      userName: 'cbuludag',
      description: 'Bugünde iyi tırmandım'
    },
    {
      title: 'Doğa Yürüşü',
      imageUrl: 'tree.jpg',
      userName: 'cbdoga',
      description: 'Hadi biraz Maçk parkında turlayalım'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'mountain.jpg',
      userName: 'cbuludag',
      description: 'Bugünde iyi tırmandım'
    },
    {
      title: 'Doğa Yürüşü',
      imageUrl: 'tree.jpg',
      userName: 'cbdoga',
      description: 'Hadi biraz Maçk parkında turlayalım'
    },
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'bike.jpg',
      userName: 'cbdag',
      description: 'Çok hızlı sürdüm'
    }
  ]

}
