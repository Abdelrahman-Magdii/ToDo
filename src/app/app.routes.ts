import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: ToDoComponent ,title:"Todo"},
    { path: 'home', component: HomeComponent , title: "Home"},
    { path: 'todo/:id', component: TodoDetailsComponent, title: "Todo Details"},
    { path: 'about', component: AboutComponent , title:"About"},
    {path:'contactUs', component: ContactUsComponent , title: "Contact"},
    {path:'**', component: NotFoundComponent, title:'Not Found'}
];
