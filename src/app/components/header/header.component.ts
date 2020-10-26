import { BehaviorSubject } from 'rxjs';
import { LoginService } from './../../services/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: BehaviorSubject<boolean>;
  constructor(private loginService:LoginService,private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.loggedInStatus;    
  }
  logout(){
    localStorage.clear();
    this.loginService.loggedInStatus.next(false);
    this.router.navigate(['login']);
  }
}
