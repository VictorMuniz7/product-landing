import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './sign/login/login.component';
import { RegisterComponent } from './sign/register/register.component';
import { FormComponent } from './contact/form/form.component';
import { FaqComponent } from './contact/faq/faq.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { RegisteredComponent } from './sign/registered/registered.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormComponent,
    FaqComponent,
    BuyComponent,
    HomeComponent,
    RegisteredComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
