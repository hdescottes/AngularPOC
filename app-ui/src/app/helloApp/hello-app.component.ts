import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Hello } from './model/hello-app';
import { HelloService } from './service/hello-service.service';

@Component({
  selector: 'hello-app-root',
  templateUrl: './hello-app.component.html',
  styleUrls: ['./hello-app.component.css'],
  standalone: false,
})
export class HelloAppComponent implements OnInit {

  public static URL = '/hello';

  readonly title = 'Spring Boot - Angular Application';
  private readonly helloService = inject(HelloService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  hello: Hello | null = null;
  loading = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.getHello();
  }

  getHello(): void {
    this.loading = true;
    this.errorMessage = null;

    this.helloService.getHello()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: (data) => {
          this.hello = data;
        },
        error: (error: HttpErrorResponse) => {
          this.hello = null;
          this.errorMessage = error.status === 0
            ? 'Le serveur est indisponible.'
            : 'Impossible de charger le message.';
        }
      });
  }
}
