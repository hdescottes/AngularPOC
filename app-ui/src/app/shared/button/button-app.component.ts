import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'button-app-root',
    templateUrl: './button-app.component.html',
    styleUrls: ['./button-app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonAppComponent {

    readonly title: any = input<string>();
}