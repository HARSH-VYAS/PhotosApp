import { Injectable } from '@angular/core';
import { Photo } from 'app/model/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosserviceService {

  photos : Photo [] = [];

  constructor() 
  { 

  }

  getPhotos() : Photo[]
  {
    const photo =new Photo(1,"summer","wildlife",20,"jpeg",1);
    const photo1 =new Photo(1,"summer","wildlife",20,"jpeg",1);
    const photo2 =new Photo(1,"summer","wildlife",20,"jpeg",1);
    const photo3 =new Photo(1,"summer","wildlife",20,"jpeg",1);
    this.photos = [photo, photo1,photo2,photo3];

    return this.photos;
  }
}
