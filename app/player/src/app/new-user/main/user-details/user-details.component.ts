import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        // console.log(feature);
    }
  constructor() { }

  ngOnInit() {
  }

}
