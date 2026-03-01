import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Albums } from './albums/albums';
import { AlbumDetail } from './album-detail/album-detail';
import { AlbumPhotos } from './album-photos/album-photos';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums/:id/photos', component: AlbumPhotos },
  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums', component: Albums, pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
