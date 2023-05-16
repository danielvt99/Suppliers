import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(path: string, options?: any): any {
    return this.http.get(`${config.apiUrl}/${path}`, options);
  }

  post(path: string, body: any, options?: any): any {
    return this.http.post(`${config.apiUrl}/${path}`, body, options)
  }

  put(path: string, body: any, options?: any):any {
    return this.http.put(`${config.apiUrl}/${path}`, body, options)
  }

  delete(path: string, options?: any): any {
    return this.http.delete(`${config.apiUrl}/${path}`, options)
  }
}
