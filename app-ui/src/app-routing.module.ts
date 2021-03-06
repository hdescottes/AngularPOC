import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsAppComponent } from './app/commentsApp/comments-app.component';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { SettingsAppComponent } from './app/settingsApp/settings-app.component';
import { SideNavBarAppComponent } from './app/shared/sideNavBar/sidenavbar-app.component';

const routes: Routes = [
  {
    path: '', component: SideNavBarAppComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeAppComponent },
      { path: 'hello', component: HelloAppComponent },
      { path: 'comments', component: CommentsAppComponent },
      { path: 'settings', component: SettingsAppComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
