import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() set products(value: Product[]) {
    this.list = [...value];
  }
  list: Product[] = [];
  @Input() selectedCategoryId: number | null = null;
  @Output() categoryChange = new EventEmitter<number>();

  selectCategory(id: number) {
    this.categoryChange.emit(id);
  }

  remove(id: number) {
    this.list = this.list.filter(p => p.id !== id);
  }
}
