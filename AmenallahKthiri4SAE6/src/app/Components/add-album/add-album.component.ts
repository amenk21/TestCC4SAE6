import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  constructor( private _activated : ActivatedRoute , private _albumService : AlbumService , private _router :Router){}

  album : FormGroup = new FormGroup({
    
    title: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$') ]),
    creationDate : new FormControl(new Date(),[]),
    archived : new FormControl(0,[]),
    coverPicture : new FormControl('',[Validators.minLength(5)]),
    photos : new FormControl('',[]),


  })
  get title()
  {
    return this.album.get('title')

  }

  get creationDate()
  {
    return this.album.get('creationDate')

  }

  get archived()
  {
    return this.album.get('archived')

  }

  get coverPicture()
  {
    return this.album.get('coverPicture')

  }

  add()
  { 
    console.log(this.album.value);
    this._albumService.addAlbum(this.album.value);
    console.log(this._albumService.albums);
    this._router.navigate(['/albums'])




    
  }

}
