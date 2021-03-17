import {Component} from '@angular/core';

export function createComponentTypes (componentName: string) {
    return `mobi-b2c-${componentName}-major,mobi-b2c-${componentName}-minor`;
}

@Component({
    selector: 'foo-component,bar-component',
    template: `<h1>Some text</h1>`,
    styles: [`
        :host-context(.mobi-b2c-theme-light) :host(bar-component) {
            color: blue;
        }
        
        :host-context(.mobi-b2c-theme-light) :host(foo-component) {
            color: red;
        }
    `]
})
export class SomeComponent {
}
