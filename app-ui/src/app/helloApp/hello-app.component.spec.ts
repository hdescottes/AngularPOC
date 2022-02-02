import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloAppComponent } from './hello-app.component';

describe('HelloAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HelloAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularclient'`, () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularclient');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Hello test CRUD with Angular');
  });
});
