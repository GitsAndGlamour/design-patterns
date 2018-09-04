import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-concurrency',
  template: `
    <div [ngSwitch]="sub">
      <div *ngSwitchCase="''">No pattern</div>
      <div *ngSwitchDefault>Pattern {{sub}} not available yet.</div>
    </div>`
})
export class ConcurrencyComponent implements OnInit {
  @Input() sub: string;
  constructor() { }

  ngOnInit() {
  }
}

