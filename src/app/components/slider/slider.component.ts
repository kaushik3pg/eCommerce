import { Component, Input, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() slides: { imgUrl: string; heading: string; subHeading: string }[] = [];
  constructor() {}


  displayImage(event:any){
event.target.style.background = `url(${this.slides[0].imgUrl})`;
  }

  ngOnInit(): void {}
}
