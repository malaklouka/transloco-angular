
import {  Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'todos'
    }
  ]
})
export class NavBarComponent {}
