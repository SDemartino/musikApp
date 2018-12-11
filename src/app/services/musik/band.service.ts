import { Injectable } from '@angular/core';
import {SERVER_URL} from '../../objects/global-vals';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Band} from '../../objects/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  bandListUrl = `${SERVER_URL}/bandList/`;
  bandDetail = `${SERVER_URL}/band/`;

  constructor(private http: HttpClient) { }

  getBandList(): Observable<Band[]> {
    return this.http.get<Band[]>(this.bandListUrl);
  }

  getBand(id: String) {
    return this.http.get<Band>(this.bandDetail + id);
  }

  addBand(band: Band) {
    return this.http.post(this.bandListUrl, band);
  }

  updateBand(id: String, band: Band) {
    return this.http.put(this.bandDetail + id + '/', band);
  }

  deleteBand(id: String) {
    return this.http.delete(this.bandDetail + id + '/');
  }
}
