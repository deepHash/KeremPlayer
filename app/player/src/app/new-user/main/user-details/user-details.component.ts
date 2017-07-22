import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
@Output() userDetails = new EventEmitter<any>();
disableButton: boolean = false;

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
    }
    disable(feature:string) {
        this.featureSelected.emit(feature);
        this.disableButton=true;
    }
  constructor() { }

  getUserDetails(value:any) {
    this.userDetails.emit(value);
  }

  ngOnInit() {
  }

}
