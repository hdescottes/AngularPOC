import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { AppComponent } from './app/app.component';
import { SideNavBarAppComponent } from './app/shared/sideNavBar/sidenavbar-app.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonAppComponent } from './app/shared/button/button-app.component';
import { ToggleBtnAppComponent } from './app/shared/toggleBtn/toggle-btn-app.component';
import { SettingsAppComponent } from './app/settingsApp/settings-app.component';
import { CommentsAppComponent } from './app/commentsApp/comments-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    HelloAppComponent,
    CommentsAppComponent,
    SettingsAppComponent,
    SideNavBarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ButtonAppComponent,
    ToggleBtnAppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
