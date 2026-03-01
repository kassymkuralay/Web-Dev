import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Album } from './models/album.model';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com' ;
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient){}

  getAlbums():Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(albums => this.albumsSubject.next(albums))
    );
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);

  }

  updateAlbum(album: Album): Observable<Album>{
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(() => {
        const current = this.albumsSubject.value;
        const next = current.map(a => (a.id === album.id ? { ...a, title: album.title } : a));
        this.albumsSubject.next(next);
      })
    );

  }

  deleteAlbum(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const current = this.albumsSubject.value;
        this.albumsSubject.next(current.filter(a => a.id !== id));
      })
    );

  }
  
}
