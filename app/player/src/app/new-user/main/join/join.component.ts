import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
disableButton: boolean = false;

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        this.disableButton=true;
    }
  constructor() { }

  ngOnInit() {
  }

}
