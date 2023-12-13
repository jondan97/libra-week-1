import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { Error404Component } from './components/error404/error404.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "users", component: AllUsersComponent},
    {path: "users/:id", component: UserDetailsComponent},
    {path: "**", component: Error404Component}
];
