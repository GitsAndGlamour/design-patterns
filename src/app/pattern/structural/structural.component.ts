import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural',
  template: `
    <div [ngSwitch]="sub">
      <div *ngSwitchCase="''">No pattern</div>
      <div *ngSwitchDefault>Pattern {{sub}} not available yet.</div>
    </div>`
})
export class StructuralComponent implements OnInit {
  @Input() sub: string;
  constructor() { }

  ngOnInit() {
  }
}

