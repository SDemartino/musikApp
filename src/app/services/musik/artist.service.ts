import {Injectable} from '@angular/core';
import {SERVER_URL} from '../../objects/global-vals';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artist} from '../../objects/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artistListUrl = `${SERVER_URL}/artistList/`;
  artistDetail = `${SERVER_URL}/artist/`;

  constructor(private http: HttpClient) {
  }

  getArtistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistListUrl);
  }

  getArtist(id: String) {
    return this.http.get<Artist>(this.artistDetail + id);
  }

  addArtist(artist: Artist) {
    return this.http.post(this.artistListUrl, artist);
  }

  updateArtist(id: String, artist: Artist) {
    return this.http.put(this.artistDetail + id + '/', artist);
  }

  deleteArtist(id: String) {
    return this.http.delete(this.artistDetail + id + '/');
  }

}
