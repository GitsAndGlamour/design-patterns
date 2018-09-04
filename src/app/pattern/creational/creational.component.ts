import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creational',
  template: `
    <div [ngSwitch]="sub">
      <div *ngSwitchCase="'main'">This is the Main Page</div>
      <app-abstract-factory *ngSwitchCase="'abstract-factory'"></app-abstract-factory>
      <div *ngSwitchDefault>Pattern {{sub}} not available yet.</div>
    </div>`
})
export class CreationalComponent implements OnInit {
  @Input() sub: string;
  constructor() { }

  ngOnInit() {
  }

}
