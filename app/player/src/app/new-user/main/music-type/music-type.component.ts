import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-music-type',
  templateUrl: './music-type.component.html',
  styleUrls: ['./music-type.component.css']
})
export class MusicTypeComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  @Output() typeSelected = new EventEmitter<string>();
  disableButton: boolean = false;
  
    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        this.disableButton=true;
    }

    onSelectType(type:string) {
        this.typeSelected.emit(type);
    }
  constructor() { }

  ngOnInit() {
  }

}
