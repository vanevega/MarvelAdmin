import { Component } from '@angular/core';
import { ManagementService } from './services/management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasPermission: boolean = false;
  title = 'MarvelAdmin';
  ux: any = localStorage.getItem('user')
  user: any = this.ux != null ? JSON.parse(this.ux) : null;

  constructor(private management: ManagementService) {
    this.setUserData();
  }

  private setUserData() {
    if (this.user == null || localStorage.getItem('app') == null) {
      let userPayload = { // Se pasan en duro porque no hay formulario de login
        username:"Vanessa",
        password: "password"
      };
      this.management.getLoginToken(userPayload).subscribe({
        next: async (response: any) => {
          this.user = response;
          localStorage.setItem('app', 'MarvelApp');
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
          this.hasPermission = true;
        },
        error: (err: any) => {
          console.log(err)
          this.hasPermission = false;
        }
      });
    } else {
      this.hasPermission = true;
    }
  }
}
