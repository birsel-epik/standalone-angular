import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-child',
  standalone: true,
  templateUrl: './card-child.component.html',
  styleUrls: ['./card-child.component.scss']
})
export class CardChildComponent {
  @Input() titleChild : string = '';
  @Input() imageUrlChild: string = '';
  @Input() userNameChild: string = '';
  @Input() descriptionChild : string = '';

}
