import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PhotoService} from "../../app/services/photo.service";


@Component({
  selector: 'app-display-photo',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.scss']
})
export class DisplayPhotoComponent implements OnInit {
  photoUrl: string = '';

  constructor(
    private photoService : PhotoService) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages()
  {
    this.photoService.getPhotos().subscribe( response => {
      this.photoUrl = response.urls.regular;
      console.log(this.photoUrl)
    })
  }

  onClick() {
    this.getImages();
  }


}

