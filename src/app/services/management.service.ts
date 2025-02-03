import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ManagementService extends CommonService {
  
  constructor(
    private httpClient: HttpClient,
  ) {
    super(httpClient);
  }

  public getAllCharacters(): Observable<any> {
    const options = this.getHeaders(localStorage.getItem('token'));
    return this.httpClient.get(`${this.apiURL}/inside/characters`, options);
  }

  public getCharactersBy(id: number): Observable<any> {
    const options = this.getHeaders(localStorage.getItem('token'));
    return this.httpClient.get(`${this.apiURL}/inside/characters/${id}`, options);
  }

  public getLoginToken(userPayload: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/outside/login`, userPayload);
  }
}
