import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface CallResponse {
  urls: {
    regular : string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //baseUrl = 'https://api.unsplash.com/';
  constructor( private httpClient:HttpClient ) { }
    getPhotos() {
      return this.httpClient.get<CallResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID c_EgsZeplJUTgYKpIGnycRgy1-g2Nd1heepRNiv9U-k'
        }
      })
  }

}
