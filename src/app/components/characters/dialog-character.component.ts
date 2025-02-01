import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-character',
  templateUrl: '../../views/characters/dialog-character.component.html',
  styleUrls: ['../../views/characters/dialog-character.component.css']
})
export class DialogCharacterComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

}
