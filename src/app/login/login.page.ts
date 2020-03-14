import { Component, OnInit, ViewChild } from '@angular/core';
import {  NavController , AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username', {static: true}) uname;
  @ViewChild('password', {static: true}) password;
  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.uname.value, this.password.value);
  }
  async signInUser() {
    // console.log('Would sing in with ', this.uname.value, this.password.value);
    // tslint:disable-next-line: triple-equals
    if (this.uname.value == 'admin' && this.password.value == 'admin') {
      return this.router.navigateByUrl('/tabs');
    } else {
      const alert2 = await this.alertController.create({
        header: 'Login Failed',
        subHeader: 'Your username and password doesnt match',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
      await alert2.present();
    }
  }

}
