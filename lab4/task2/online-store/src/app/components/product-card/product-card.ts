import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() name = '';
  @Input() rating = '';
  @Input() stars = '';
  @Input() reviews = '';
  @Input() price = '';
  @Input() badge = '';
  @Input() image = '';
  @Input() link = '';
  @Input() installment = '';
  @Input() installmentCount = '';
  shareType: 'wa' | 'tg' = 'wa';

  encode(value: string): string {
    return encodeURIComponent(value);
  }

  share(): void {
    const encodedLink = this.encode(this.link);
    const encodedName = this.encode(this.name);
    let url = '';
    if (this.shareType === 'wa') {
      url = `https://wa.me/?text=Check out this product: ${encodedLink}`;
    } else {
      url = `https://t.me/share/url?url=${encodedLink}&text=${encodedName}`;
    }
    window.open(url, '_blank');
  }
}
