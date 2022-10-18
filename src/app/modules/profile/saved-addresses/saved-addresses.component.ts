import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userDetails } from 'src/app/data/user';
import {delete_, edit, save_address, addNewAddress, showSavedAddress} from './../../../data/constants';


@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.component.html',
  styleUrls: ['./saved-addresses.component.css']
})
export class SavedAddressesComponent implements OnInit {
  addresses = userDetails.addresses;
  toggleAddressBtn = addNewAddress;
  showNewAddressForm = false;

  addressForm! : FormGroup;

  deleteBtn = delete_;
  editBtn = edit;
  saveAddressBtn = save_address;


  toggleNewAddressForm(){
    this.showNewAddressForm = !this.showNewAddressForm;
   this.showNewAddressForm ? this.toggleAddressBtn = showSavedAddress : this.toggleAddressBtn = addNewAddress;
   

  }

  createForm = () => {
    this.addressForm = this.fb.group({
      house: ['', Validators.compose([Validators.required])],
      street: ['', Validators.compose([Validators.required])],
      area : ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      pincode: [ , Validators.compose([Validators.required])]
    })
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

}
