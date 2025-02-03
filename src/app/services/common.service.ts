import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  protected apiURL = `${environment.MARVEL_APIDATA}`;

  constructor(protected http: HttpClient) {}

  httpOptions: any = {};

  errorHandler(error: any) {
    console.log("errorHandler ===========> ", error);
    return error;
  }

  getHeaders(token: any) {
    const headers: any = { 'Content-Type': 'application/json; charset=utf-8'};
    if (token != null) headers.Authorization = `Bearer ${token}`; // if token authorization exist add to headers
    return { headers: new HttpHeaders(headers) };
  }

  parseQueryParams(data: any) {
    let query: any = "";

    Object.keys(data).map((item: any, index: any) => {
      query += `${item}=${Object.values(data)[index]}`;
      query += index === Object.keys(data).length -1 ? "" : "&";
    });

    return query;
  }

  serializePayload(data: any, type: any) {
    let serialObj: any = { data: { attributes: data }, type: type };
    //
    return serialObj;
  }
}
