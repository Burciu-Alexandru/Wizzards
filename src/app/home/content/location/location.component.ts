import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoAppointmentComponent } from './do-appointment/do-appointment.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(){
    this.dialog.open(DoAppointmentComponent);
  }

}
