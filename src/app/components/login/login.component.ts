import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userRoleValue = 'Donor';
  isChecked = false;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      userId: '',
      password: '',
      userRole: false,
    });
  }

  ngOnInit(): void {}

  userRoleSwitch(event) {
    this.isChecked = event.target.checked;
    this.userRoleValue = this.isChecked ? 'Acceptor' : 'Donor';
  }

  submitLoginForm(loginForm) {
    console.log(loginForm);
    localStorage.setItem('isAuthenticated', 'true');
    this.loginService.loggedInStatus.next(true);
    this.loginForm.controls.userRole.value === true
      ? this.router.navigate(['acceptor'])
      : this.router.navigate(['donor']);
  }
}
