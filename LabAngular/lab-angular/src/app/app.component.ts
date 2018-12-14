import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab-angular';

  selecionado = null;
  dropdown = [];
  ngOnInit() {
    this.dropdown = [
      { name: `Nome1`, valor: `1` },
      { name: `Nome2`, valor: `2` },
      { name: `Nome3`, valor: `3` }
    ];
  }
}
