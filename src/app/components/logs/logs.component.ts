import { Component } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-logs',
  templateUrl: '../../views/logs/logs.component.html',
  styleUrls: ['../../views/logs/logs.component.css']
})
export class LogsComponent {
  loading: boolean = false;
  access: Array<any> = [];
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
    this.getAllAccess();
  }

  pageChanged(event: any) {
    this.payload.page = event;
  }

  private getAllAccess() {
    this.management.getAllAccess().subscribe({
      next: async (response: any) => {
        this.access = response;
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err)
        this.loading = false;
      }
    });
  }
}
