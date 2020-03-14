import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('username', {static: true}) uname;
  @ViewChild('password', {static: true}) password;
  constructor() { }

  ngOnInit() {
  }
  registerUser(){
    console.log('Would register in with ', this.uname.value, this.password.value);
  }
}
