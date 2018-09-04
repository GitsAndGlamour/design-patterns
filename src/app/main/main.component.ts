import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tab: string;
  constructor() { }

  ngOnInit() {
    this.tab = 'uses';
  }
  selectTab(tab: string) {
    this.tab = tab;
  }

}
