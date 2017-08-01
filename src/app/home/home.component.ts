import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  inputs: ["mainNinja"],
  outputs: ["onYell"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  hometitle = "Welcome to the Directory";
  inputValue: string = "This is Input 1";
  isRequired:boolean = false;
  onYell = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  alertMe(value){
    alert(value);
  }

  ninja = {
    name : "Saurabh",
    belt : "Black"
  }

  yell(e){
    this.onYell.emit(e);
  }

}
