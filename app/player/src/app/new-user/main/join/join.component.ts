import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();


buttonClass = {
  'disableButton':false
}

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        this.buttonClass.disableButton=true;
    }

  constructor() { }

  ngOnInit() {
  }

}
