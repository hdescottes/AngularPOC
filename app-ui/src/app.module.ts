import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { HelloService } from './app/helloApp/service/hello-service.service';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    HelloAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
