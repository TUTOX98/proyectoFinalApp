import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [IonicModule, CommonModule, FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

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
    try {
      const user = await this.authService.loginWithGoogle();
      if (user) {
        this.router.navigate(['/main/home']);
      } else {
        console.warn('Inicio de sesión cancelado o fallido');
      }
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.warn('El usuario cerró la ventana de inicio de sesión.');
      } else {
        console.error('Error en el inicio de sesión con Google:', error);
      }
    }
  }
  
}
