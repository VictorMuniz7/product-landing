import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { FaqComponent } from './contact/faq/faq.component';
import { FormComponent } from './contact/form/form.component';
import { LoginComponent } from './sign/login/login.component';
import { RegisterComponent } from './sign/register/register.component';
import { RegisteredComponent } from './sign/registered/registered.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'purchase', component: BuyComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'contact', component: FormComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'register/registered', component: RegisteredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
