import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, IonicModule ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
logout() {
    console.log('Logout clicked');
  }

  constructor() { }

  ngOnInit() {}

}
