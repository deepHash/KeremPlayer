import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-nav',
  templateUrl: './player-nav.component.html',
  styleUrls: ['./player-nav.component.css']
})
export class PlayerNavComponent implements OnInit {
@Output() sectionSelected = new EventEmitter<string>();
  
  constructor() { }

  onSelect(section:string) {
      this.sectionSelected.emit(section);
  }

  ngOnInit() {
  }

}
