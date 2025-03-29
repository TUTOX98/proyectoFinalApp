import { Injectable } from '@angular/core';

interface Pokemon {
  name: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Pokemon[] = [];

  getCart(): Pokemon[] {
    return this.cart;
  }

  addToCart(pokemon: Pokemon) {
    this.cart.push(pokemon);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }
}
