import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combao',
  templateUrl: './combao.component.html',
  styleUrls: ['./combao.component.css']
})
export class CombaoComponent {

  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

}
