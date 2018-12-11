import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from '../../objects/artist';
import {faPencilAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import {animate, style, transition, trigger} from '@angular/animations';
import {TypService} from '../../services/config/typ.service';
import {Typ} from '../../objects/typ';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class ArtistFormComponent implements OnInit {

  @Output() addArtist = new EventEmitter<Artist>();
  @Input() artistEdit: Artist;
  @Input() toEditFlag: boolean;

  artist: Artist;
  typList: Typ[];
  open: boolean;
  formButtonText: string;
  trigButtonText: string;
  faPencilAlt = faPencilAlt;
  faPlus = faPlus;

  constructor(public typService: TypService) {
  }

  ngOnInit() {
    this.open = false;
    this.artist = {...this.artistEdit};
    this.trigButtonText = '+';
    this.formButtonText = 'ADD';
    this.getTypList();
    this.setTextLabel();
  }

  getTypList() {
    this.typService.getTypList().subscribe(
      data => this.typList = data
    );
  }

  setTextLabel() {
    if (this.toEditFlag) {
      this.formButtonText = 'EDIT';
      this.trigButtonText = this.formButtonText;
    } else {
      this.formButtonText = 'ADD';
    }
  }

  onSubmit() {
    this.addArtist.emit(this.artist);
    this.artist = new Artist();
  }

  changeFlag($event) {
    this.open = !this.open;
  }
}
