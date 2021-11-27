import { Component } from '@angular/core';

// template: `<div><h1>Called</h1></div><div><input type="text"></div>,
// <div><input type="text"></div>
// <div><input type="text"></div>
// <div><input type="text"></div>`,
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Jay Amin';
}
