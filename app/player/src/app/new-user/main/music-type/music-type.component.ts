import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-music-type',
  templateUrl: './music-type.component.html',
  styleUrls: ['./music-type.component.css']
})
export class MusicTypeComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  @Output() typeSelected = new EventEmitter<string>();

  
    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        // console.log(feature);
    }

    onSelectType(type:string) {
        this.typeSelected.emit(type);
        // console.log(feature);
    }
  constructor() { }

  ngOnInit() {
  }

}
