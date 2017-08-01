import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {name: 'Saurabh', belt: 'Black'},
    {name: 'Suraj', belt: 'Brown'},
    {name: 'Amey', belt: 'purple'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
