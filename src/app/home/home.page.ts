import { Component, OnInit , ViewChild} from '@angular/core';
import {  NavController , AlertController, LoadingController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  @ViewChild('username', {static: true}) uname;
  @ViewChild('password', {static: true}) password;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SignIn() {
    return this.router.navigateByUrl('/login');
  }

  Register() {
    return this.router.navigateByUrl('register');
  }



}
