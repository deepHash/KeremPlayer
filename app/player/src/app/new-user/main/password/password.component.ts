import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        // console.log(feature);
    }
  constructor() { }

  ngOnInit() {
  }

}