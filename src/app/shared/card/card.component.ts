import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() products: {
    id: number;
    imgUrl: string;
    category: string;
    title: string;
    price: number;
    ratings: number;
  }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
