import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Typ} from '../../objects/typ';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {TypService} from '../../services/config/typ.service';

@Component({
  selector: 'app-typ-list',
  templateUrl: './typ-list.component.html',
  styleUrls: ['./typ-list.component.scss']
})
export class TypListComponent implements OnInit {

  @Input() typList: Typ[];
  @Output() typ = new EventEmitter<Typ>();
  formFlag: boolean;
  toEditFlag: boolean;
  faTrashAlt = faTrashAlt;

  constructor(public typService: TypService) {
  }

  ngOnInit() {
    this.formFlag = true;
    this.toEditFlag = true;
  }

  changeFlag(e: Event) {
    this.formFlag = !this.formFlag;
  }

  addTyp(typ: Typ) {
    this.typService.updateTyp(typ.typId, typ).subscribe(data =>
      this.typService.getTypList().subscribe(
        typList => this.typList = typList
      )
    );
  }

  deleteItem(typ: Typ) {
    this.typ.emit(typ);
  }

}
