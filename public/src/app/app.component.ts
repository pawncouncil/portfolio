import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    ]
})
export class AppComponent {
  title = 'public';
  constructor (private _httpService: HttpService) {}
}
