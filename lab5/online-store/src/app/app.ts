import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { Product } from './models/product.model';
import { categories, products } from './store-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories = categories;
  products = products;
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.products.filter(p => p.categoryId === id);
  }
}
