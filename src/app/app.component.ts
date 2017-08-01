import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [HomeComponent]
})
export class AppComponent {
  /*title = 'Angular Project';

  mainNinja = {
    name : "Saurabh",
    belt : "Black"
  }

  yell(e){
    alert("I am Yelling...")
    console.log(e)
  }*/
}
