import { Component, OnInit ,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoAppointmentComponent } from './do-appointment/do-appointment.component';
import locationModel from './location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() locationmodel!: locationModel;
  
  constructor(public dialog: MatDialog) { 
  }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(DoAppointmentComponent);
  }

}
