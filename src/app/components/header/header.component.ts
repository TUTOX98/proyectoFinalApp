import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, IonicModule ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); 
    });
  }
}
