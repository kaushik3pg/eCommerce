import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/data/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  birthday : string = userDetails.dob;
  name : string = userDetails.name;
  mobile : string = userDetails.mobile;
  constructor() { }

  onChangeBirthday(){
  }

  onChangeName(){
  }

  onChangeMobile(){
  }

  ngOnInit(): void {
  }

}
