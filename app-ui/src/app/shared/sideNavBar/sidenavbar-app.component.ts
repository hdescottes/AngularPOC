import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sidenavbar-app-root',
    templateUrl: './sidenavbar-app.component.html',
    styleUrls: ['./sidenavbar-app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SideNavBarAppComponent implements OnInit {

    currentActiveId: string

    constructor() {
    }

    ngOnInit(): void {
    }

    onMenuIconClick() {
        const sidebar = document.querySelector("[data-sidebar]")
        sidebar?.classList.toggle("open")
    }

    onListItemClick(event: any) {
        this.resetActiveSidebar(this.currentActiveId)

        const id = event.path.find((element: { localName: string; }) => element.localName === "li").id
        this.activeSidebar(id)

        this.currentActiveId = id
    }

    activeSidebar(id: any) {
        const sidebar = document.getElementById(id)
        sidebar?.classList.toggle("active")
        sidebar?.children[0].children[0].classList?.toggle("active")
        sidebar?.children[0].children[1].classList?.toggle("active")
    }

    resetActiveSidebar(currentActiveId: any) {
        if (this.currentActiveId != null) {
            this.activeSidebar(currentActiveId)
        }
    }
}