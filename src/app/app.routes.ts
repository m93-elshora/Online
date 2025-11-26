import { Routes } from '@angular/router';
import { Auth } from './core/layouts/auth/auth';
// Update the import to match the actual export from the module
import { Login } from './core/layouts/auth/components/login/login';
import { Register } from './core/layouts/auth/components/register/register';
import { ForgetPass } from './core/layouts/auth/components/forget-pass/forget-pass';
import { ChangePass } from './core/layouts/auth/components/change-pass/change-pass';
import { ResetPass } from './core/layouts/auth/components/reset-pass/reset-pass';
import { Home } from './features/home/compnents/home/home';
import { Categ } from './features/catogry/compnents/categ/categ';
import { Cart } from './features/cart/components/cart/cart';
import { NotFound } from './shared/components/not-found/not-found';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { SendCode } from './core/layouts/auth/components/send-code/send-code';

export const routes: Routes = [

  {path: '', component: Auth,children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component :Login },
    {path: 'register', component :Register },
    {path: 'forgetpassword', component :ForgetPass },
    {path: 'changepassword', component :ChangePass },
    {path: 'resetpassword', component :ResetPass },
    {path:'sendcode', component:SendCode}
  ]},

  {
    path:'', component : MainLayout, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'category', component: Categ},
    {path: 'cart', component: Cart},
    {path: '**', component: NotFound}
  ]}



];
