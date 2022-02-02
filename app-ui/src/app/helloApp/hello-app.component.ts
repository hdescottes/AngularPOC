import { Component, Input, OnInit } from '@angular/core';
import { Hello } from './model/hello-app';
import { HelloService } from './service/hello-service.service';

@Component({
  selector: 'hello-app-root',
  templateUrl: './hello-app.component.html',
  styleUrls: ['./hello-app.component.css']
})
export class HelloAppComponent implements OnInit {

  public static URL = '/hello';

  title: string;
  hello: Hello;

    constructor(private helloService: HelloService) {
      this.title = 'Spring Boot - Angular Application';
    }

    ngOnInit(): void {
        this.getHello();
    }

    getHello() {
      this.helloService.getHello().subscribe((data: any) => {
        this.hello = data;
      });
    }
}
