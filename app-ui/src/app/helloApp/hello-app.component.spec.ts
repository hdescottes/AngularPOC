import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HelloAppComponent } from './hello-app.component';
import { HelloService } from './service/hello-service.service';

describe('HelloAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        HelloAppComponent
      ],
      providers: [HelloService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Spring Boot - Angular Application'`, () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Spring Boot - Angular Application');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Hello test CRUD with Angular');
  });
});
