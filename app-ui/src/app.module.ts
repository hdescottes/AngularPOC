import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { HelloService } from './app/helloApp/service/hello-service.service';
import { AppComponent } from './app/app.component';
import { SideNavBarAppComponent } from './app/sideNavBar/sidenavbar-app.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    HelloAppComponent,
    SideNavBarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
