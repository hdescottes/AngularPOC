import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'toggle-btn-app-root',
    templateUrl: './toggle-btn-app.component.html',
    styleUrls: ['./toggle-btn-app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ToggleBtnAppComponent {

    readonly title: any = input<string>();
}