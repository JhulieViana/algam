import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  auth: any;
  constructor() { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha);
  }

}
