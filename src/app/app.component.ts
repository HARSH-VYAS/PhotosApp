import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoItemContainerComponent } from './photo-item-container/photo-item-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,PhotoItemContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PhotosApp';
}
