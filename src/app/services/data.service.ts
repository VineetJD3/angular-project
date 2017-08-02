import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchNinjaData(){
    return this.http.get('/ninjas.JSON').map(
      (res) => res.json()
    );
  }

}
