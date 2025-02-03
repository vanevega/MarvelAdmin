import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-character',
  templateUrl: '../../views/characters/dialog-character.component.html',
  styleUrls: ['../../views/characters/dialog-character.component.css']
})
export class DialogCharacterComponent {

  character: any;
  comics: Array<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.character = data.character;
    this.comics = this.character.comics.items;
  }

  getImg() {
    return this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
  }
}
