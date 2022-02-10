import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { HelloService } from './app/helloApp/service/hello-service.service';
import { AppComponent } from './app/app.component';
import { SideNavBarAppComponent } from './app/shared/sideNavBar/sidenavbar-app.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonAppComponent } from './app/shared/button/button-app.component';
import { ToggleBtnAppComponent } from './app/shared/toggleBtn/toggle-btn-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    HelloAppComponent,
    SideNavBarAppComponent,
    ButtonAppComponent,
    ToggleBtnAppComponent
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
