import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonButton } from "@ionic/angular/standalone";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { CartService } from 'src/app/services/cart/cart.service';

interface Pokemon {
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  imports: [IonicModule, CommonModule, FooterComponent, HeaderComponent],
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  pokemon: any;

  constructor(private router: Router, private cartService: CartService  ) {
    const nav = this.router.getCurrentNavigation();
    this.pokemon = nav?.extras.state?.['pokemon'];
  }

  addToCart(pokemon: Pokemon) {
    this.cartService.addToCart(pokemon);
    this.router.navigate(['/main/cart']);
  }

  returnPage() {
    this.router.navigate(['/main/home']);
  }
}