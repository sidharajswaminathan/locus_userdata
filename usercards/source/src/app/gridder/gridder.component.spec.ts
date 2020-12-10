import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridderComponent } from './gridder.component';

describe('GridderComponent', () => {
  let component: GridderComponent;
  let fixture: ComponentFixture<GridderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
