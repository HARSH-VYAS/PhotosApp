import { Injectable } from '@angular/core';
import { Photo } from 'app/model/Photo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosserviceService {

  photos : Photo [] = [];

  constructor(private http:HttpClient) 
  { 

  }

  getPhotos() : Observable<Photo[]>
  {
    return this.http.get<Photo[]>("https://my-json-server.typicode.com/HARSH-VYAS/PhotosApp/photos");
  }
}
