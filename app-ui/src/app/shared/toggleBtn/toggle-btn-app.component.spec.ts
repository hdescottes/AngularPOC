import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ToggleBtnAppComponent } from "./toggle-btn-app.component";

describe('ToggleBtnAppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                ToggleBtnAppComponent
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(ToggleBtnAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render checkbox', () => {
        const fixture = TestBed.createComponent(ToggleBtnAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('input')?.attributes.length).toEqual(3);
        expect(compiled.querySelector('input')?.type).toEqual("checkbox");
        expect(compiled.querySelector('input')?.defaultChecked).toBeFalsy();
        expect(compiled.querySelector('input')?.className).toEqual("toggle");
    });

    it('should render span', () => {
        const fixture = TestBed.createComponent(ToggleBtnAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('span')?.className).toEqual("title");
    });
});