import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { RouterTestingModule } from "@angular/router/testing";
import { SideNavBarAppComponent } from "./sidenavbar-app.component";

describe('SideNavBarAppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatIconModule
            ],
            declarations: [
                SideNavBarAppComponent
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('div')?.textContent).toContain("My angular springboot application");
    });

    it('should render home element', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('li')?.id).toEqual("1");
        expect(compiled.querySelector('li')?.querySelector('a')?.href).toEqual("http://localhost/home");
        expect(compiled.querySelector('li')?.querySelector('a')?.querySelector('mat-icon')?.textContent).toContain("home");
    });

    it('onMenuIconClick', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        const app = fixture.componentInstance;
        const compiled = fixture.nativeElement as HTMLElement;

        app.onMenuIconClick();

        const sidebar = compiled.querySelector("[data-sidebar]");
        expect(sidebar?.classList).toContain("open");
    })

    it('activeSidebar', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        const app = fixture.componentInstance;
        const id = '1';

        app.activeSidebar(id);

        const sidebar = document.getElementById(id)
        expect(sidebar?.classList).toContain("active");
        expect(sidebar?.children[0].children[0].classList).toContain("active");
        expect(sidebar?.children[0].children[1].classList).toContain("active");
    })

    it('resetActiveSidebar', () => {
        const fixture = TestBed.createComponent(SideNavBarAppComponent);
        const app = fixture.componentInstance;
        const id = '1';
        app.currentActiveId = id;

        jest.spyOn(app, 'activeSidebar');

        app.resetActiveSidebar(id);

        expect(app.activeSidebar).toHaveBeenCalledTimes(1);
    })
});