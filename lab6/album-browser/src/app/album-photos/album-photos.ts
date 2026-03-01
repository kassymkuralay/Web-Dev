import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  photos$!: Observable<Photo[]>;
  albumId!: number;

  constructor(private route: ActivatedRoute, private service: AlbumService) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.service.getAlbumPhotos(this.albumId);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (!img.src.includes('/placeholder.svg')) {
      img.src = '/placeholder.svg';
    }
  }
}
