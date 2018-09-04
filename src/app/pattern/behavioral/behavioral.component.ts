import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-behavioral',
  template: `
    <div [ngSwitch]="sub">
      <div *ngSwitchCase="''">No pattern</div>
      <div *ngSwitchDefault>Pattern {{sub}} not available yet.</div>
    </div>`
})
export class BehavioralComponent implements OnInit {
@Input() sub: string;
  constructor() { }

  ngOnInit() {
  }
}
