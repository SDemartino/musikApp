import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Typ} from '../../objects/typ';
import {faPencilAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-typ-form',
  templateUrl: './typ-form.component.html',
  styleUrls: ['./typ-form.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class TypFormComponent implements OnInit {

  @Output() addTyp = new EventEmitter<Typ>();
  @Input() typEdit: Typ;
  @Input() toEditFlag: boolean;

  typ: Typ;
  open: boolean;
  formButtonText: string;
  trigButtonText: string;
  faPencilAlt = faPencilAlt;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
    this.open = false;
    this.typ = {...this.typEdit};
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
    this.addTyp.emit(this.typ);
    this.typ = new Typ();
  }

  changeFlag($event) {
    this.open = !this.open;
  }

}
