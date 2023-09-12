import { Component, Input } from '@angular/core';
import { IGridRow } from '../app.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() rows: IGridRow[] | null = [];

  headers: string[] = ['id', 'int', 'float', 'color', 'child'];
}
