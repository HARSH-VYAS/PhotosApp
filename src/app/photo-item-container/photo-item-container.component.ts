import { Component } from '@angular/core';
import { PhotosserviceService } from 'app/services/photosservice.service';
import { Photo } from 'app/model/Photo';
import { PhotoItemComponent } from 'app/photo-item/photo-item.component';
@Component({
  selector: 'app-photo-item-container',
  standalone: true,
  imports: [],
  templateUrl: './photo-item-container.component.html',
  styleUrl: './photo-item-container.component.css'
})

export class PhotoItemContainerComponent
{
  photos : Photo[] = [];

  constructor(private photoService : PhotosserviceService)
  {
    this.photos = this.photoService.getPhotos();
  }

  hidePhoto(ph:Photo)
  {
    this.photos = this.photos.filter(p=> p.id!=ph.id);
  }

}
