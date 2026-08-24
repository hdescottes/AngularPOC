import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HelloService } from './service/hello-service.service';

@Component({
  selector: 'hello-app-root',
  templateUrl: './hello-app.component.html',
  styleUrls: ['./hello-app.component.css'],
  standalone: false,
})
export class HelloAppComponent {

  readonly title = 'Spring Boot - Angular Application';
  private readonly helloService = inject(HelloService);

  readonly helloResource = rxResource({
    stream: () => this.helloService.getHello()
  });

  readonly errorMessage = computed(() => {
    const error = this.helloResource.error();
    return error instanceof Error ? error.message : null;
  });

  retry(): void {
    this.helloResource.reload();
  }
}
