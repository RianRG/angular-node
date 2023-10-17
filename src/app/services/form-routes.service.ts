import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../Items';
import { ItemsReq } from '../ItemsReq';

@Injectable({
  providedIn: 'root'
})
export class FormRoutesService {
  private apiurl = 'http://localhost:5000/transactions'
  constructor(private http: HttpClient) { }
  postRoute(formData: ItemsReq): Observable<ItemsReq>{
    return this.http.post<ItemsReq>(this.apiurl, formData);
  }
}
