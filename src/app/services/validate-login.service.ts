import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValidateLoginService {

  constructor() { }

  private _loginStatus = new BehaviorSubject(false);
  private _loginStatus$ = this._loginStatus.asObservable();
  
  getLoginStatus(){
    return this._loginStatus$;
  }

  setLoginStatus(currentLoginStatus: boolean){
    return this._loginStatus.next(currentLoginStatus);
  }
}
