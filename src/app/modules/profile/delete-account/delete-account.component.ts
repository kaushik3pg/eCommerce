import { Component, OnInit } from '@angular/core';
import {delete_account} from './../../../data/constants';
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  password: string = '';
  deleteAccountBtn = delete_account;
  constructor() { }
  onDeleteAccount(){

  }
  ngOnInit(): void {
  }

}
