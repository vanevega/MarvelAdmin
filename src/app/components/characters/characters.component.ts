import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-characters',
  templateUrl: '../../views/characters/characters.component.html',
  styleUrls: ['../../views/characters/characters.component.css'],
})
export class CharactersComponent implements OnInit {
  loading: boolean = false;
  characters: Array<any> = [];
  totalEntries: number = 100;
  payload: any = {
    is_active: true,
    page: 1,
    per_page: 100,
  };
  p: number = 1;

  constructor(private management: ManagementService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCharacters();
  }

  pageChanged(event: any) {
    this.payload.page = event;
  }

  private getCharacters() {
    this.management.getAllCharacters().subscribe({
      next: async (response: any) => {
        this.characters = response.data.results;
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err)
        this.loading = false;
      }
    });
  }
}
