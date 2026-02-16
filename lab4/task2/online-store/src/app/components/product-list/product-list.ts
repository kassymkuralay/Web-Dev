import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    {
      name: 'Adal молоко 3.2% 925 мл',
      rating: '★★★★★ (40 отзывов)',
      stars: '★★★★★',
      reviews: '(40 отзывов)',
      price: '750 ₸',
      badge: 'В рассрочку 250 ₸ ×3',
      installment: '250 ₸',
      installmentCount: '×3',
      image: 'assets/products/adal.png',
      link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000'
    },
    {
      name: 'Coca‑Cola газированная 1 л',
      rating: '★★★★★ (152 отзыва)',
      stars: '★★★★★',
      reviews: '(152 отзыва)',
      price: '665 ₸',
      badge: 'В рассрочку 222 ₸ ×3',
      installment: '222 ₸',
      installmentCount: '×3',
      image: 'assets/products/cola.jpg',
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      name: 'Lactel молоко 3.2% 1000 мл',
      rating: '★★★★☆ (21 отзыв)',
      stars: '★★★★☆',
      reviews: '(21 отзыв)',
      price: '852 ₸',
      badge: 'В рассрочку 284 ₸ ×3',
      installment: '284 ₸',
      installmentCount: '×3',
      image: 'assets/products/lactel.jpeg',
      link: 'https://kaspi.kz/shop/p/lactel-moloko-3-2-1000-ml-102095919/?c=750000000'
    },
    {
      name: 'Snickers Super',
      rating: '★★★★★ (98 отзывов)',
      stars: '★★★★★',
      reviews: '(98 отзывов)',
      price: '420 ₸',
      badge: 'В рассрочку 140 ₸ ×3',
      installment: '140 ₸',
      installmentCount: '×3',
      image: 'assets/products/snickers.jpg',
      link: 'https://kaspi.kz/shop/p/snickers-super-shokoladnyi-batonchik-molochnyi-80-g-102153456/?c=750000000'
    },
    {
      name: 'KINDER Bueno шоколадный батончик молочный 43 г',
      rating: '★★★★★ (69 отзывов)',
      stars: '★★★★★',
      reviews: '(69 отзывов)',
      price: '525 ₸',
      badge: 'В рассрочку 175 ₸ ×3',
      installment: '175 ₸',
      installmentCount: '×3',
      image: 'assets/products/kinder.jpeg',
      link: 'https://kaspi.kz/shop/p/kinder-bueno-shokoladnyi-batonchik-molochnyi-43-g-100222744/?c=750000000'
    },
    {
      name: 'Ferrero Raffaello 150 г',
      rating: '★★★★★ (129 отзывов)',
      stars: '★★★★★',
      reviews: '(129 отзывов)',
      price: '2 300 ₸',
      badge: 'В рассрочку 767 ₸ ×3',
      installment: '767 ₸',
      installmentCount: '×3',
      image: 'assets/products/rafaello.jpg',
      link: 'https://kaspi.kz/shop/p/konfety-orehovye-ferrero-raffaello-150-g-100814346/?c=750000000'
    },
    {
      name: 'MAKFA гречневая крупа ядрица 800 г',
      rating: '★★★★★ (120 отзывов)',
      stars: '★★★★★',
      reviews: '(120 отзывов)',
      price: '941 ₸',
      badge: 'В рассрочку 314 ₸ ×3',
      installment: '314 ₸',
      installmentCount: '×3',
      image: 'assets/products/makfa.jpg',
      link: 'https://kaspi.kz/shop/p/makfa-grechnevaja-krupa-jadritsa-800-g-100983023/?c=750000000'
    },
    {
      name: 'Набеглави лечебно‑столовая газированная 1 л',
      rating: '★★★★★ (255 отзывов)',
      stars: '★★★★★',
      reviews: '(255 отзывов)',
      price: '735 ₸',
      badge: 'В рассрочку 245 ₸ ×3',
      installment: '245 ₸',
      installmentCount: '×3',
      image: 'assets/products/water.jpg',
      link: 'https://kaspi.kz/shop/p/nabeglavi-lechebno-stolovaja-gazirovannaja-1-l-100210196/?c=750000000'
    },
    {
      name: 'Asem‑ai вода газированная 1 л',
      rating: '★★★★☆ (31 отзыв)',
      stars: '★★★★☆',
      reviews: '(31 отзыв)',
      price: '530 ₸',
      badge: 'В рассрочку 176 ₸ ×3',
      installment: '176 ₸',
      installmentCount: '×3',
      image: 'assets/products/asem.jpeg',
      link: 'https://kaspi.kz/shop/p/asem-ai-sarya-ash-gazirovannaja-1-5-l-100211079/?c=750000000'
    },
    {
      name: 'Adal молоко 2.5% 1 л',
      rating: '★★★★☆ (12 отзывов)',
      stars: '★★★★☆',
      reviews: '(12 отзывов)',
      price: '790 ₸',
      badge: 'В рассрочку 263 ₸ ×3',
      installment: '263 ₸',
      installmentCount: '×3',
      image: 'assets/products/adal2.jpeg',
      link: 'https://kaspi.kz/shop/p/adal-moloko-2-5-925-ml-100223089/?c=750000000'
    }
  ];
}
