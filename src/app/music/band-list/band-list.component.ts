import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Band} from '../../objects/band';
import {BandService} from '../../services/musik/band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  @Input() bandList: Band[];
  @Output() band = new EventEmitter<Band>();
  formFlag: boolean;
  toEditFlag: boolean;
  faTrashAlt = faTrashAlt;

  constructor(public bandService: BandService) { }

  ngOnInit() {
    this.formFlag = true;
    this.toEditFlag = true;
  }

  changeFlag(e: Event) {
    this.formFlag = !this.formFlag;
  }

  addBand(band: Band) {
    this.bandService.updateBand(band.bandId, band).subscribe(data =>
      this.bandService.getBandList().subscribe(
        dataList => this.bandList = dataList
      )
    );
  }

  deleteItem(band: Band) {
    this.band.emit(band);
  }

}
