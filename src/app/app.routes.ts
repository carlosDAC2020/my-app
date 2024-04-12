import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// vistas
import {BasicViewComponent} from './basic-view/basic-view.component'
import {ApiClientViewComponent} from './api-client-view/api-client-view.component'
import {LoginViewComponent} from './login-view/login-view.component'

export const routes: Routes = [
    { path: 'basic', component: BasicViewComponent },
    { path: 'api-client', component: ApiClientViewComponent },
    { path: 'login', component: LoginViewComponent },
    { path: '', redirectTo: '/basic', pathMatch: 'full' } 
];

