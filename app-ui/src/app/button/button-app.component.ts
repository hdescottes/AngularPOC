import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'button-app-root',
    templateUrl: './button-app.component.html',
    styleUrls: ['./button-app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonAppComponent implements OnInit {

    @Input() title: any;

    constructor() {
    }

    ngOnInit(): void {
    }
}