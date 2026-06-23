import { Routes } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path :'home' , component :Home},
    {path : 'login', component :Login},
    {path : 'profile', component : ProfileComponent},
    {path :'signup' , component :Signup},
    
    {path :'**' , component : PageNotFound}
];
