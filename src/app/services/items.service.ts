import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemResult } from '../models/itemResult';
import { ItemsSearchResults } from '../models/ItemSearchResults';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  apiEndpoint;
  apiEndpointBORRAR; //TODO

  constructor(private http: HttpClient) { 
    this.apiEndpoint = "http://localhost:3600"
  }

  public search(searchText: string) : Observable<ItemsSearchResults> {
    const url = `${this.apiEndpoint}/api/items?q=${searchText}`
    return this.http.get<any>(url);
  }

  public getItemById(id: string) : Observable<ItemResult> {
    const url = `${this.apiEndpoint}/api/items/${id}`
    return this.http.get<any>(url);
  }
}
