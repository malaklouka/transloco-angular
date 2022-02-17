import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';


@Component({
  selector: 'my-comp',
  templateUrl: './todos.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'todos'
    }
  ]
})
export class MyComponent {}
