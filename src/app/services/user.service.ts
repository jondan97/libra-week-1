import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private endpointUrl = "https://reqres.in/api/users";

  constructor() { }

  getUsers(){
    return this.http.get(this.endpointUrl);
  }
}
