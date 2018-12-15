import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
      AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>Hola desde el app.component</p>
    <app-ng-class></app-ng-class>
    <h4 class="mt-3 " [appHighlight]="'orange'">Directivas</h4>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngDoCheck() {
    console.log('doCheck');
  }

  ngAfterContentInit() {
    console.log('afterContentInit');
  }
  ngAfterContentChecked() {
    console.log('afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }
  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }
  ngOnDestroy() {
    console.log('onDestroy');
  }

}
