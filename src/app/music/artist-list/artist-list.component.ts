import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from '../../objects/artist';
import {ArtistService} from '../../services/musik/artist.service';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() artistList: Artist[];
  @Output() artist = new EventEmitter<Artist>();
  formFlag: boolean;
  toEditFlag: boolean;
  faTrashAlt = faTrashAlt;

  constructor(public artistService: ArtistService) {
  }

  ngOnInit() {
    this.formFlag = true;
    this.toEditFlag = true;
  }

  changeFlag(e: Event) {
    this.formFlag = !this.formFlag;
  }

  addArtist(artist: Artist) {
    this.artistService.updateArtist(artist.artistId, artist).subscribe(data =>
      this.artistService.getArtistList().subscribe(
        dataList => this.artistList = dataList
      )
    );
  }

  deleteItem(artist: Artist) {
    this.artist.emit(artist);
  }


}
