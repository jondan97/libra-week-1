import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient);
  private endpointUrl = "../assets/sample-data/stores.json";

  constructor() { }

  getStores(){
    return this.http.get<Store[]>(this.endpointUrl);
  }
}
