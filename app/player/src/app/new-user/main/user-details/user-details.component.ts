import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
//
name:string = '';
day:string ='';
month:string ='';
year:string = '';
email:string = '';

@Output() featureSelected = new EventEmitter<string>();
@Output() userDetails = new EventEmitter<any>();
buttonClass = {
  'disableButton':false
}

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
    }
    continue(feature:string) {
        this.featureSelected.emit(feature);
        this.buttonClass.disableButton=true;
    }
  constructor() { }

  getUserDetails(value:any) {
    console.log(value.name);
    console.log();
    this.userDetails.emit(value);
  }

  ngOnInit() {
  }

}
