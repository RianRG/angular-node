import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../Items';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = 'http://localhost:5000/transactions';
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Items[]>{
    console.log(this.url);
    return this.http.get<Items[]>(this.url);
  }

  deleteUser(item: string): Observable<Items>{
    console.log(`id::::: ${item}`)
    return this.http.delete<Items>(`${this.url}/${item}`);
  }
}
