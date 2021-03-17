import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <foo-component></foo-component>
     <bar-component></bar-component>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'hostContextTest';
}
