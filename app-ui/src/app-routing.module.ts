import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloAppComponent } from './app/helloApp/hello-app.component';
import { HomeAppComponent } from './app/homeApp/home-app.component';
import { SideNavBarAppComponent } from './app/shared/sideNavBar/sidenavbar-app.component';

const routes: Routes = [
  {
    path: '', component: SideNavBarAppComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeAppComponent },
      { path: 'hello', component: HelloAppComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
