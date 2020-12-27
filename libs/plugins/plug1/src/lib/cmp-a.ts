import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plug1-a',
    template: `
    <a routerLink="../b">To B</a>
    <div>Plugin A component</div>
    `
})
export class AComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
