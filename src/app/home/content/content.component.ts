import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  list = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit(): void {
  }

}
