import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IGridRow } from './app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rows$: Observable<IGridRow[]> = this.dataService.getEditedGridRows();

  constructor(private dataService: DataService) {
    this.dataService = new DataService();
  }
}
