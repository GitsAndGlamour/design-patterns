import { Component, OnInit } from '@angular/core';

class Tab {
  url: string;
  name: string;
  subs?: Tab[];
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  tabs: Tab[];
  selectedTab: string;
  selectedSubTab: string;
  constructor() { }

  ngOnInit() {
    this.selectedTab = window.location.pathname;
    this.selectedSubTab = window.location.pathname;
    this.tabs = [
      {url: 'creational', name: 'Creational', subs: [
          {url: 'abstract', name: 'Abstract'},
          {url: 'builder', name: 'Builder'},
          {url: 'dependency-injection', name: 'Dependency Injection'},
          {url: 'factory', name: 'Factory'},
          {url: 'lazy', name: 'Lazy'},
          {url: 'mutltiton', name: 'Mutltiton'},
          {url: 'object-pool', name: 'Object Pool'},
          {url: 'prototype', name: 'Prototype'},
          {url: 'raii', name: 'RAII'},
          {url: 'singleton', name: 'Singleton'}
        ]},
      {url: 'structural', name: 'Structural', subs: [
          {url: 'adapter', name: 'Adapter'},
          {url: 'bridge', name: 'Bridge'},
          {url: 'composite', name: 'Composite'},
          {url: 'decorator', name: 'Decorator'},
          {url: 'extension-object', name: 'Extension Object'},
          {url: 'facade', name: 'Facade'},
          {url: 'flyweight', name: 'Flyweight'},
          {url: 'front-controller', name: 'Front Controller'},
          {url: 'marker', name: 'Marker'},
          {url: 'module', name: 'Module'},
          {url: 'proxy', name: 'Proxy'},
          {url: 'twin', name: 'Twin'}
        ]},
      {url: 'behavioral', name: 'Behavioral', subs: [
          {url: 'blackboard', name: 'Blackboard'},
          {url: 'chain-of-responsibility', name: 'Chain of Responsibility'},
          {url: 'command', name: 'Command'},
          {url: 'interpreter', name: 'Interpreter'},
          {url: 'iterator', name: 'Iterator'},
          {url: 'mediator', name: 'Mediator'},
          {url: 'memento', name: 'Memento'},
          {url: 'null-object', name: 'Null Object'},
          {url: 'preserver', name: 'Preserver'},
          {url: 'servant', name: 'Servant'},
          {url: 'specification', name: 'Specification'},
          {url: 'state', name: 'State'},
          {url: 'strategy', name: 'Strategy'},
          {url: 'template-method', name: 'Template Method'},
          {url: 'visitor', name: 'Visitor'}
        ]},
      {url: 'concurrency', name: 'Concurrency', subs: [
          {url: 'active', name: 'Active'},
          {url: 'bulking', name: 'Bulking'},
          {url: 'binding-properties', name: 'Binding Properties'},
          {url: 'compute-kernel', name: 'Compute Kernel'},
          {url: 'double-checked-locking', name: 'Double-checked Locking'},
          {url: 'event-based-async', name: 'Event-based Async'},
          {url: 'guarded-suspension', name: 'Guarded Suspension'},
          {url: 'join', name: 'Join'},
          {url: 'lock', name: 'Lock'},
          {url: 'messaging', name: 'Messaging'},
          {url: 'monitor-object', name: 'Monitor Object'},
          {url: 'read-write-lock', name: 'Read-Write Lock'},
          {url: 'scheduler', name: 'Scheduler'},
          {url: 'thread-pool', name: 'Thread Pool'},
          {url: 'thread-specific-storage', name: 'Thread-Specific Storage'},
        ]}
      ];
  }
  selectTab(tab: string, sub?: boolean) {
    this.selectedTab = tab;
    if (sub) {
      this.selectedSubTab = tab;
    }
  }

}
