import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on previous slide', () => {
    component.imgIndex = 5;
    component.slidesLength = 10;
    component.showPreviousSlide();
    expect(component.imgIndex).toEqual(4);
  });
  it('on next slide', () => {
    component.imgIndex = 5;
    component.slidesLength = 10;
    component.showNextSlide();
    expect(component.imgIndex).toEqual(6);
  });
});
