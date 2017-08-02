import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService, DataService]
})
export class DirectoryComponent implements OnInit {

  ninjas = [];
  constructor(private logger : LoggingService, private dataService : DataService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    this.dataService.fetchNinjaData().subscribe(
      (data) => this.ninjas = data
    );
  }

}
