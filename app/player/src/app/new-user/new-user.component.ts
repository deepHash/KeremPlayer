import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @Output() buildPlayerComponent = new EventEmitter<string>(); 
  constructor() { }

  buildPlayer(email:string) {
      this.buildPlayerComponent.emit(email);
  }

  ngOnInit() {
  }

}
