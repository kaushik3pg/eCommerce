import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/data/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: {title:string, route: string}[] = menu;
  constructor() { }

  ngOnInit(): void {
  }

}
