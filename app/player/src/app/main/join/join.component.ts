import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        // console.log(feature);
    }
  constructor() { }

  ngOnInit() {
  }

}
