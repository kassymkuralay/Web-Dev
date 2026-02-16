import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard, } from './components/product-card/product-card';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCard, ProductList ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
