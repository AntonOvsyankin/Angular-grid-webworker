import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { GridRow, IGridRow } from '../app.model';
import { By } from '@angular/platform-browser';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent],
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dont display grid without data', () => {
    const grid = fixture.debugElement.query(By.css('.grid'));
    expect(grid).toBeNull();
  });

  it('Display grid with data', () => {
    component.rows = Array(getGridRow());
    fixture.detectChanges();
    const grid = fixture.debugElement.query(By.css('.grid'));
    expect(grid).toBeTruthy();
  });

  it('Grid row created', () => {
    component.rows = Array(getGridRow());
    fixture.detectChanges();
    const row = fixture.debugElement.query(By.css('.grid-row'));
    expect(row).toBeTruthy();
    const child = row.children[row.children.length - 1].nativeElement;
    expect(child).toHaveClass('child');
  });

  it('Grid color column has background-color', () => {
    component.rows = Array(getGridRow());
    fixture.detectChanges();
    const row = fixture.debugElement.query(By.css('.grid-row'));
    const index = component.headers.findIndex(val => val ==='color');
    const colorColumn = row.children[index];
    expect(colorColumn.query(By.css('span')).nativeElement.style.backgroundColor).toBe('red');
  });
});

function getGridRow(): IGridRow {
  return new GridRow({
    id: '1',
    int: 1,
    float: 1.11111,
    color: 'red',
    child: { id: '1', color: 'red' },
  });
}
