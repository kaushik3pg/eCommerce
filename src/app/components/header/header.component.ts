import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: {title:string, route: string}[] = [
    {title: 'Home', route: '/'}, 
    {title: 'Fashion', route: '/toBeCreateRoute1'},
    {title: 'Jewellery', route: '/toBeCreateRoute2'},
    {title: 'Deals', route: '/toBeCreateRoute3'},
    {title: 'Account', route: '/account'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
