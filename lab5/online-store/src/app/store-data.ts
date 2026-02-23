import { Category } from './models/category.model';
import { Product } from './models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Молочные продукты, яйца' },
  { id: 2, name: 'Овощи, фрукты, ягоды, грибы' },
  { id: 3, name: 'Сладости и выпечка' },
  { id: 4, name: 'Крупы, хлопья, макароны' }
];

export const products: Product[] = [
  { id: 1,  name: 'PRESIDENT творог рассыпчатый 9% 450 г', price: 1199, rating: 4.7, reviews: 120, image: 'assets/products/tvorog.jpg', link: 'https://kaspi.kz/shop/p/president-tvorog-rassypchatyi-9-450-g-101082006/?c=750000000', likes: 0, categoryId: 1 },
  { id: 2,  name: 'Adal молоко 3.2% 925 мл',           price: 750, rating: 4.8, reviews: 210, image: 'assets/products/adal.png', link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000', likes: 0, categoryId: 1 },
  { id: 3,  name: 'Петропавловское молоко 3.2% 900 мл',price: 585, rating: 4.7, reviews: 148, image: 'assets/products/milk.jpg', link: 'https://kaspi.kz/shop/p/petropavlovskoe-moloko-3-2-900-ml-100815879/?c=750000000', likes: 0, categoryId: 1 },
  { id: 4,  name: 'Сыр Брест‑Литовск полутвердый',      price: 1569,   rating: 4.6, reviews: 89, image: 'assets/products/cheese.png', link: 'https://kaspi.kz/shop/p/syr-brest-litovsk-polutverdyi-slivochnyi-50-200-g-102726660/?c=750000000', likes: 0, categoryId: 1 },
  { id: 5,  name: 'Яйцо Казгер‑Кус куриное 10 шт',      price: 919,   rating: 4.6, reviews: 75, image: 'assets/products/eggs.jpg', link: 'https://kaspi.kz/shop/p/jaitso-kazger-kus-kurinoe-10-sht-65-72-g-100236606/?c=750000000', likes: 0, categoryId: 1 },

  { id: 6,  name: 'MAGNUM картофель фермерский',        price: 299, rating: 4.9, reviews: 2702, image: 'assets/products/potato.jpg', link: 'https://kaspi.kz/shop/p/magnum-kartofel-fermerskii-otbornyi-kazahstan-102865232/?c=750000000', likes: 0, categoryId: 2 },
  { id: 7,  name: 'MAGNUM лук репчатый Казахстан',      price: 99,  rating: 4.8, reviews: 2215, image: 'assets/products/onion.jpg', link: 'https://kaspi.kz/shop/p/magnum-luk-repchatyi-kazahstan-101349070/?c=750000000', likes: 0, categoryId: 2 },
  { id: 8,  name: 'MAGNUM морковь отборная Казахстан', price: 252, rating: 4.7, reviews: 1400, image: 'assets/products/carrot.jpg', link: 'https://kaspi.kz/shop/p/magnum-morkov-otbornaja-kazahstan-106203164/?c=750000000', likes: 0, categoryId: 2 },
  { id: 9,  name: 'MAGNUM помидор ', price: 1122,   rating: 4.6, reviews: 582, image: 'assets/products/tomato.jpg', link: 'https://kaspi.kz/shop/p/magnum-pomidor-kazahstan-108375597/?c=750000000', likes: 0, categoryId: 2 },
  { id: 10, name: 'MAGNUM огурцы Миринда',   price: 2129,   rating: 4.6, reviews: 1528, image: 'assets/products/cucumber.jpg', link: 'https://kaspi.kz/shop/p/magnum-ogurtsy-mirinda-teplichnye-kazahstan-102219959/?c=750000000', likes: 0, categoryId: 2 },

  { id: 11, name: 'Печенье Баян Сулу Юбилейное',        price: 1009, rating: 4.8, reviews: 549, image: 'assets/products/cookie.jpg', link: 'https://kaspi.kz/shop/p/pechen-e-bajan-sulu-jubileinoe-102350573/?c=750000000', likes: 0, categoryId: 3 },
  { id: 12, name: 'Snickers Super шоколадный батончик', price: 639,  rating: 4.8, reviews: 126, image: 'assets/products/snickers.jpg', link: 'https://kaspi.kz/shop/p/snickers-super-shokoladnyi-batonchik-molochnyi-80-g-102153456/?c=750000000', likes: 0, categoryId: 3 },
  { id: 13, name: 'Барни бисквит шоколад 5 шт',         price: 1505, rating: 4.7, reviews: 118, image: 'assets/products/barni.jpg', link: 'https://kaspi.kz/shop/p/barni-biskvit-s-molochnoi-nachinkoi-150-g-101179235/?c=750000000', likes: 0, categoryId: 3 },
  { id: 14, name: 'Рахат Kazakhstan шоколад 100 г',     price: 799,  rating: 4.7, reviews: 353, image: 'assets/products/choco.jpg', link: 'https://kaspi.kz/shop/p/rahat-kazakhstan-shokoladnaja-plitka-temnyi-100-g-100221859/?c=750000000', likes: 0, categoryId: 3 },
  { id: 15, name: 'Печенье Oreo Original',              price: 799,  rating: 4.7, reviews: 97, image: 'assets/products/oreo.jpg', link: 'https://kaspi.kz/shop/p/pechen-e-oreo-original-s-kakao-i-nachinkoi-s-vanil-nym-vkusom-228-g-100971349/?c=75000000', likes: 0, categoryId: 3 },

  { id: 16, name: 'Арнау рис Баракат 2000 г',           price: 1019, rating: 4.7, reviews: 420, image: 'assets/products/rice.jpg', link: 'https://kaspi.kz/shop/p/arnau-ris-barakat-2000-g-104438445/?c=750000000', likes: 0, categoryId: 4 },
  { id: 17, name: 'MAKFA спагетти 400 г',       price: 538,  rating: 4.6, reviews: 178, image: 'assets/products/makfas.jpg', link: 'https://kaspi.kz/shop/p/makfa-spagetti-400-g-100212727/?c=750000000', likes: 0, categoryId: 4 },
  { id: 18, name: 'Султан спираль 400 г',               price: 439,  rating: 4.6, reviews: 96, image: 'assets/products/spiral.jpg', link: 'https://kaspi.kz/shop/p/sultan-spiral-400-g-100212062/?c=750000000', likes: 0, categoryId: 4 },
  { id: 19, name: 'ЦАРЬ хлопья 5 злаков 400 г',         price: 440,  rating: 4.6, reviews: 143, image: 'assets/products/cereal.jpg', link: 'https://kaspi.kz/shop/p/tsar-hlop-ja-5-zlakov-400-g-100812007/?c=750000000', likes: 0, categoryId: 4 },
  { id: 20, name: 'Big Bon лапша курица+соус сальца 75 г',         price: 625,  rating: 4.7, reviews: 124, image: 'assets/products/bigbon.jpg', link: 'https://kaspi.kz/shop/p/big-bon-lapsha-kuritsa-sous-sal-tsa-75-g-100800053/?c=750000000', likes: 0, categoryId: 4 }
];
