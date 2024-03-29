import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base = environment.API;

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string) {
    return this.http.get(this.base+url);
  }
  post(url: string, data: any) {
    return this.http.post(this.base+url, data);
  }
}
