import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plug1-b',
    template: `
    <a routerLink="../a">To A</a>
    <div>Plugin B component</div>
    `
})
export class BComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
