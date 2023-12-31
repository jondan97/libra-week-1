import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { Error404Component } from './components/error404/error404.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AllStoresComponent } from './components/all-stores/all-stores.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "users", component: AllUsersComponent},
    {path: "users/:id", component: UserDetailsComponent},
    {path: "stores", component: AllStoresComponent},
    {path: "create-store", component: CreateStoreComponent},
    {path: "**", component: Error404Component}
];
