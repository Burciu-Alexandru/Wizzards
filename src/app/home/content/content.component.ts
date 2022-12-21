import { Component, OnInit } from '@angular/core';
import { locationListData } from './content.data';
import locationModel from './location/location.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  list = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
  locationList : locationModel[] = locationListData;

  constructor() { }

  ngOnInit(): void {
  }

}
