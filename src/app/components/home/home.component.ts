import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

interface Pokemon {
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  featuredPokemon: Pokemon[] = [];
  catalogPokemon: Pokemon[] = [];
  loadingCatalog: boolean = true;
  constructor(private http: HttpClient, private cartService: CartService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loadFeaturedPokemon();
    this.loadCatalogPokemon();
  }

  loadFeaturedPokemon() {
    const randomIds = this.getRandomIds(3);
    randomIds.forEach(id => {
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(data => {
        this.featuredPokemon.push({
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          price: this.getRandomPrice()
        });
      });
    });
  }

  loadCatalogPokemon() {
    this.loadingCatalog = true;
    const ids = Array.from({ length: 6 }, (_, i) => i + 1); 
    ids.forEach(id => {
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(data => {
        this.catalogPokemon.push({
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          price: this.getRandomPrice()
        });
        if (this.catalogPokemon.length === ids.length) {
          this.loadingCatalog = false;
        }
      });
    });
  }

  addToCart(pokemon: Pokemon) {
    this.cartService.addToCart(pokemon);
    this.router.navigate(['/main/cart']);
  }
  

  viewDetails(pokemon: Pokemon) {
    console.log('Ver detalles de:', pokemon);
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/main']); 
    });
  }
  

  getRandomIds(count: number): number[] {
    const ids = new Set<number>();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * 150) + 1);
    }
    return Array.from(ids);
  }

  getRandomPrice(): number {
    return Math.floor(Math.random() * 50 + 50);
  }
}
