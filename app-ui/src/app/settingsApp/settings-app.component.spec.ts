import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ToggleBtnAppComponent } from "../shared/toggleBtn/toggle-btn-app.component";
import { SettingsAppComponent } from "./settings-app.component";

describe('SettingsAppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            declarations: [
                SettingsAppComponent,
                ToggleBtnAppComponent
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(SettingsAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render toggle button', () => {
        const fixture = TestBed.createComponent(SettingsAppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('toggle-btn-app-root')?.attributes.length).toEqual(2);
    });
});