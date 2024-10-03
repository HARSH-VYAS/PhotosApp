import { Routes } from '@angular/router';
import { PhotoItemContainerComponent } from './photo-item-container/photo-item-container.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = 
[
    {path:'', component:PhotoItemContainerComponent},
    {path:'About', component:AboutComponent}
];
