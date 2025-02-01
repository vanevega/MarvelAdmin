import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: '../../views/characters/characters.component.html',
  styleUrls: ['../../views/characters/characters.component.css'],
})
export class CharactersComponent {
  formOrder: FormGroup = new FormGroup({});
  loading: boolean = false;
  characters: Array<string> = [ "m"];
  sizePerPage: number = 10;
  totalEntries: number = 100;
  payload: any = {
    is_active: true,
    page: 1,
    per_page: 100,
  };
  p: number = 1;



  pageChanged(event: any) {
    this.payload.page = event;
    //this.loadClients(this.payload);
  }

}
