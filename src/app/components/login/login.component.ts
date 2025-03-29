import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [IonicModule, CommonModule, FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  async login() {
    const user = await this.authService.login(this.email, this.password);
    if (user) {
      console.log('Inicio de sesión exitoso:', user);
    } else {
      console.error('Error en el inicio de sesión');
    }
  }

  async register() {
    const user = await this.authService.register(this.email, this.password);
    if (user) {
      console.log('Usuario registrado:', user);
    } else {
      console.error('Error en el registro');
    }
  }

  async loginWithGoogle() {
    const user = await this.authService.loginWithGoogle();
    if (user) {
      console.log('Inicio de sesión con Google exitoso:', user);
    } else {
      console.error('Error en el inicio de sesión con Google');
    }
  }
}
