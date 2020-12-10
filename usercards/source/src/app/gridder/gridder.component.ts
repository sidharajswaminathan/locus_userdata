import { Component, OnInit } from '@angular/core';
import { Users, userList } from '../userdata';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridder',
  templateUrl: './gridder.component.html',
  styleUrls: ['./gridder.component.scss']
})
export class GridderComponent implements OnInit {
  tiles: Tile[];
  users: Users[] = userList;
  userText: string;
  constructor() { }

  ngOnInit(): void {
    this.tiles = [
      {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    
  }

}
