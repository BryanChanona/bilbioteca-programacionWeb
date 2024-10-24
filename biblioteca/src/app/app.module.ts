import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LoginComponent } from '../components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from '../components/book-form.component/book-form.component.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from "../components/admin-view/admin-view.component";


@NgModule({
  declarations: [
    AppComponent,BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    AdminViewComponent,
    ReactiveFormsModule
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
