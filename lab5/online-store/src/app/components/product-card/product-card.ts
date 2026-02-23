import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  liked = false;
  shareTarget: 'whatsapp' | 'telegram' = 'whatsapp';

  like() {
    this.liked = true;
    this.product.likes += 1;
    setTimeout(() => (this.liked = false), 300);
  }

  get whatsappLink(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramLink(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  onShare() {
    const url = this.shareTarget === 'whatsapp' ? this.whatsappLink : this.telegramLink;
    window.open(url, '_blank', 'noopener');
  }

  onDelete() {
    const ok = confirm('Удалить товар?');
    if (ok) this.delete.emit(this.product.id);
  }
}
