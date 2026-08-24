import { Component, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'button-app-root',
    templateUrl: './button-app.component.html',
    styleUrls: ['./button-app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonAppComponent implements OnInit {

    readonly title: any = input<string>();

    constructor() {
    }

    ngOnInit(): void {
    }
}