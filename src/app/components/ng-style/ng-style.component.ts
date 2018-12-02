import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fontsize">
      Hello world
    </p>

    <button class="btn btn-primary mr-2" (click)="fontsize = fontsize + 5"><i class="fas fa-plus"></i></button>
    <button class="btn btn-danger" (click)="fontsize = fontsize - 5"><i class="fas fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontsize = 10;

  constructor() { }

  ngOnInit() {
  }

}
