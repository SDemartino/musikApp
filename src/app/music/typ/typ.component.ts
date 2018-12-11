import {Component, OnInit} from '@angular/core';
import {TypService} from '../../services/config/typ.service';
import {Typ} from '../../objects/typ';

@Component({
  selector: 'app-typ',
  templateUrl: './typ.component.html',
  styleUrls: ['./typ.component.scss']
})
export class TypComponent implements OnInit {

  typList: Typ[];
  public formFlag: boolean;
  public toEditFlag: boolean;

  constructor(public typService: TypService) {
  }

  ngOnInit() {
    this.getTypList();
  }

  getTypList() {
    this.typService.getTypList().subscribe(
      (data => this.typList = data)
    );
  }

  addTyp(typ: Typ) {
    this.typService.addTyp(typ).subscribe(
      data => this.getTypList()
    );
  }

  deleteItem(typ: Typ): void {
    this.typService.deleteTyp(typ.typId).subscribe(
      data => this.getTypList()
    );
  }

}
