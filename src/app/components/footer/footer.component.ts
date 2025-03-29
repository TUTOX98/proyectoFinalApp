import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [CommonModule, IonicModule ],
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
goToContact() {
throw new Error('Method not implemented.');
}
goToHome() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {}

}
