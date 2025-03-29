import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { LoginComponent } from "../../components/login/login.component";
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false,
  
})
export class MainComponent implements OnInit {
  isAuthenticated = false;
  authChecked = false;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.authService.logout()
    this.afAuth.authState.subscribe(user => {
      this.isAuthenticated = !!user;
      this.authChecked = true;
    });
  }
}