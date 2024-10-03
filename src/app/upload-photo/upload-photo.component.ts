import { Component, Output, EventEmitter } from '@angular/core';
import { Photo } from 'app/model/Photo';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './upload-photo.component.html',
  styleUrl: './upload-photo.component.css'
})
export class UploadPhotoComponent {

  id: number = 0;
  name: string = '';
  style: string = '';
  size: number = 0;
  fileType: string = '';
  vote: number = 0;
  src: string = '';

  @Output() uploadPhotos: EventEmitter<Photo> = new EventEmitter();


  submitForm() {
    const ph = {
      id: 0,
      name: this.name,
      style: this.style,
      size: this.size,
      fileType: this.fileType,
      vote: 0,
      src: this.src,
    }
    this.uploadPhotos.emit(ph);

    this.id = 0;
    this.name = '';
    this.style = '';
    this.size = 0;
    this.fileType = '';
    this.vote = 0;
    this.src = '';

  }

}
