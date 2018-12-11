import {Component, OnInit} from '@angular/core';
import {ArtistService} from '../../services/musik/artist.service';
import {Artist} from '../../objects/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistList: Artist[];
  public formFlag: boolean;
  public artist: boolean;
  public toEditFlag: boolean;

  constructor(public artistService: ArtistService) {
  }

  ngOnInit() {
    this.getArtistList();
    this.formFlag = true;
    this.toEditFlag = false;
  }

  getArtistList(): void {
    this.artistService.getArtistList().subscribe(
      data => this.artistList = data
    );
  }

  addArtist(artist: Artist) {
    this.artistService.addArtist(artist).subscribe(data =>
      this.getArtistList()
    );
  }

  deleteItem(artist: Artist): void {
    this.artistService.deleteArtist(artist.artistId).subscribe(data =>
      this.getArtistList()
    );
  }

}
