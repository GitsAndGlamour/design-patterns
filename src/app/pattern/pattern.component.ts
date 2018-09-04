import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-pattern-detail',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  tab: string;
  sub: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((obj: RouterEvent) => {
      if (obj.url) {
        const path = obj.url.split('/');
        this.sub = path[path.length - 1];
        this.tab = path[path.length - 2];
      }
    });
  }
}
