import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/Models/Album';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent {
  albums :Album[] = [];
  constructor(private _activated: ActivatedRoute, private _albumservice: AlbumService) {
this.albums= this._albumservice.albums.filter(a=>a.id==this._activated.snapshot.params['id'])
}

}