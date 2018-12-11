import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Band} from '../../objects/band';
import {faPencilAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss'],
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
export class BandFormComponent implements OnInit {

  @Output() addBand = new EventEmitter<Band>();
  @Input() bandEdit: Band;
  @Input() toEditFlag: boolean;

  band: Band;
  open: boolean;
  formButtonText: string;
  trigButtonText: string;
  faPencilAlt = faPencilAlt;
  faPlus = faPlus;

  constructor() {
  }

  ngOnInit() {
    this.open = false;
    this.band = {...this.bandEdit};
    this.trigButtonText = '+';
    this.formButtonText = 'ADD';

    this.setTextLabel();
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
    this.addBand.emit(this.band);
    this.band = new Band();
  }

  changeFlag($event) {
    this.open = !this.open;
  }

}
