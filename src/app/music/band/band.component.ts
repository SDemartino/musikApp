import {Component, OnInit} from '@angular/core';
import {Band} from '../../objects/band';
import {BandService} from '../../services/musik/band.service';
import {Artist} from '../../objects/artist';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  public bandList: Band[];
  public formFlag: boolean;
  public toEditFlag: boolean;

  constructor(public bandService: BandService) {
  }

  ngOnInit() {
    this.getBandList();
    this.formFlag = true;
    this.toEditFlag = false;
  }

  getBandList() {
    this.bandService.getBandList().subscribe(
      data => this.bandList = data
    );
  }

  addBand(band: Band) {
    this.bandService.addBand(band).subscribe(data =>
      this.getBandList()
    );
  }

  deleteItem(band: Band): void {
    this.bandService.deleteBand(band.bandId).subscribe(data =>
      this.getBandList()
    );
  }

}
