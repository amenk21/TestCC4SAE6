import { Injectable } from '@angular/core';
import { Album } from '../Models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums : Album [] = []
  private currentId: number = 0; 
  constructor() { }

  addAlbum(album :Album)
  { this.currentId++; 
    album.id = this.currentId; 
    album.archived=0;
    album.creationDate= new Date();
    this.albums.push(album);
  }
  listAlbum()
  {
    return this.albums.filter(e=>e.archived==0);
  }
}
