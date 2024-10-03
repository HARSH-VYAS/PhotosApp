import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'app/model/Photo';
import { PhotosserviceService } from 'app/services/photosservice.service';

@Component({
  selector: 'app-photo-item',
  standalone: true,
  imports: [],
  templateUrl: './photo-item.component.html',
  styleUrl: './photo-item.component.css'
})

export class PhotoItemComponent implements OnInit {
   
  @Input() photo : Photo;
  @Output() hidePhoto : EventEmitter<Photo> = new EventEmitter();

  constructor(private photoService : PhotosserviceService)
  {
    this.photo= new Photo(1,"summer","wildlife",20,"jpeg",1);
  }

  ngOnInit(): void {
    this.photo = this.photoService.getPhotos()[0];
  }

  upvote(photo:Photo):void
  {
    photo.vote+=1;
  }

  downvote(photo:Photo):void
  {
    photo.vote-=1;
  }

  hide(photo:Photo):void
  {
    this.hidePhoto.emit(photo);
  }


}
