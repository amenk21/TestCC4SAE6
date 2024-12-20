import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Album } from 'src/app/Models/Album';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor( private _activated : ActivatedRoute , private _albumService : AlbumService , private _router :Router){}
  albums : Album[]=this._albumService.listAlbum();
  loadAlbums() {
    this.albums = this._albumService.listAlbum();
  }

  deleteAlbum(id: number) {
    this._albumService.deleteAlbum(id);
    this.loadAlbums();
  }
}
