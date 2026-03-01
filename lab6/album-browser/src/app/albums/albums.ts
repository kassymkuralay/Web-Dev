import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true ,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums$!: Observable<Album[]>;
  constructor(private albumService: AlbumService) {}

  ngOnInit(){
    this.albums$ = this.albumService.albums$;
    this.albumService.getAlbums().subscribe();
  }

  delete(id: number, list: Album[]){
    this.albumService.deleteAlbum(id).subscribe(() => {
      const index = list.findIndex(a => a.id === id);
      if (index !== -1) list.splice(index, 1);
    });
  }
}
