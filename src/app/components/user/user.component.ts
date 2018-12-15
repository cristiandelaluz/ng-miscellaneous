import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute) {
    this.activetedRoute.params.subscribe(params => {
      console.log('Ruta padre');
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
