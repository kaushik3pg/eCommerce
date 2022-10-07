import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/data/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo = userDetails;
  links = ['edit-profile', 'saved-addresses', 'change-password', 'delete-account'];
  tabTitles = ['Edit Profile','Saved Addresses', 'Change Password', 'Delete Account' ]
  activeLink = this.links[0];

  constructor() {}

  ngOnInit(): void {
  }
}
