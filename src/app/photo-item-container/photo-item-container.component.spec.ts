import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoItemContainerComponent } from './photo-item-container.component';

describe('PhotoItemContainerComponent', () => {
  let component: PhotoItemContainerComponent;
  let fixture: ComponentFixture<PhotoItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoItemContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
