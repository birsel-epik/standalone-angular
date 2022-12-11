import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
