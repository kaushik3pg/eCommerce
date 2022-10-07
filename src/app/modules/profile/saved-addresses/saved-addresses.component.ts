import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/data/user';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.component.html',
  styleUrls: ['./saved-addresses.component.css']
})
export class SavedAddressesComponent implements OnInit {
  addresses = userDetails.addresses;
  constructor() { }

  ngOnInit(): void {
  }

}
