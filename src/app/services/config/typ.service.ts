import { Injectable } from '@angular/core';
import {SERVER_URL} from '../../objects/global-vals';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from '../../objects/artist';
import {Typ} from '../../objects/typ';

@Injectable({
  providedIn: 'root'
})
export class TypService {

  typListUrl = `${SERVER_URL}/typList/`;
  typDetail = `${SERVER_URL}/typ/`;

  constructor(private http: HttpClient) { }

  getTypList(): Observable<Typ[]> {
    return this.http.get<Typ[]>(this.typListUrl);
  }

  getTyp(id: String) {
    return this.http.get<Typ>(this.typDetail + id);
  }

  addTyp(typ: Typ) {
    return this.http.post(this.typListUrl, typ);
  }

  updateTyp(id: String, typ: Typ) {
    return this.http.put(this.typDetail + id + '/', typ);
  }

  deleteTyp(id: String) {
    return this.http.delete(this.typDetail + id + '/');
  }
}
