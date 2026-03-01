import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit{
  private albumSubject = new BehaviorSubject<Album | null>(null);
  album$ = this.albumSubject.asObservable();
  editedTitle = '';

  constructor(private route: ActivatedRoute, private service: AlbumService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.albumSubject.next(null);
      this.service.getAlbum(id).subscribe(a => {
        this.albumSubject.next(a);
        this.editedTitle = a.title;
      });
    });
  }

  save() {
    const current = this.albumSubject.value;
    if (!current) return;
    const updated = { ...current, title: this.editedTitle };
    // Optimistic update so UI changes immediately
    this.albumSubject.next(updated);
    this.service.updateAlbum(updated).subscribe();
  }

}
