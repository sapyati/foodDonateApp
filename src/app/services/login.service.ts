import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get loggedInStatus(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  set loggedInStatus(value) {
    this.isLoggedIn = value;
  }

  constructor() { }
}
