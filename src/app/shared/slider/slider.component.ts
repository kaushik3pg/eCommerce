import { AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { shopnow } from './../../data/constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() slides: { imgUrl: string; heading: string; subHeading: string }[] =
    [ {
      imgUrl: 'assets/images/hero/slide1.jpg',
      heading: 'The Biggest Sale',
      subHeading: 'Special for today',
    }];
    slidesLength : number = this.slides.length;
  imgIndex: number = 0;
  interval:any;

  shopNowBtn = shopnow;

  constructor() {}

  showPreviousSlide() {
    if (this.imgIndex === 0) {
      this.imgIndex = this.slidesLength - 1;
    } else this.imgIndex -= 1;
  }

  showNextSlide() {
    if (this.imgIndex === this.slidesLength - 1) {
      this.imgIndex = 0;
    } else this.imgIndex += 1;
  }

  ngOnInit(): void {
    this.slidesLength = this.slides.length;
  }
  
  ngAfterViewInit(): void {
    this.interval = setInterval(()=>this.showNextSlide(), 3000);
  }


  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
