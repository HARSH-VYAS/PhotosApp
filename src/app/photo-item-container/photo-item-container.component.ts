import { Component,Output,EventEmitter } from '@angular/core';
import { PhotosserviceService } from 'app/services/photosservice.service';
import { Photo } from 'app/model/Photo';
import { PhotoItemComponent } from 'app/photo-item/photo-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-item-container',
  standalone: true,
  imports: [CommonModule, RouterModule, PhotoItemComponent],
  templateUrl: './photo-item-container.component.html',
  styleUrl: './photo-item-container.component.css'
})

export class PhotoItemContainerComponent
{
  photos : Photo[] = [];

  constructor(private photoService : PhotosserviceService)
  {
    this.photoService.getPhotos().subscribe(resp=>{
      this.photos=resp;
    });
  }

  hidePhoto(ph:Photo)
  {
    this.photos = this.photos.filter(p=> p.id!=ph.id);
  }

}
