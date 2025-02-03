import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCharacterComponent } from './dialog-character.component';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-item-character',
  templateUrl: '../../views/characters/item-character.component.html',
  styleUrls: ['../../views/characters/item-character.component.css']
})
export class ItemCharacterComponent {
  @Input()
  character: any;

  loading: boolean = false;
  constructor(public dialog: MatDialog,
              private management: ManagementService,
  ) { }

  openDialog() {
    this.getCharacter(this.character.id);
  }

  getImg() {
    return this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
  }

  private getCharacter(id: number) {
    this.management.getCharactersBy(id).subscribe({
      next: async (response: any) => {
        let dataCharacter = response.data.results[0];
        this.dialog.open(DialogCharacterComponent, {
          data: {
            character: dataCharacter
          }
        });
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err)
        this.loading = false;
      }
    });
  }
}
