import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { IonContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [IonicModule, CommonModule, FormsModule],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart = this.cartService.getCart();

  constructor(private cartService: CartService, private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
