import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCharacterComponent } from './dialog-character.component';

@Component({
  selector: 'app-item-character',
  templateUrl: '../../views/characters/item-character.component.html',
  styleUrls: ['../../views/characters/item-character.component.css']
})
export class ItemCharacterComponent {
  @Input()
  character: any;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogCharacterComponent, {
      data: {
        character: this.character
      }
    });
  }

}
